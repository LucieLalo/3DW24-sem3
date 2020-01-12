import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../model/recipe';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  public recipeId: string;
  public recipeDetail = <Recipe>{};
  constructor( private activatedRoute: ActivatedRoute, private router: Router, private recipesService: RecipesService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.recipeId = params['id'];
      if (this.recipeId === undefined) {
        this.router.navigate(['/index']);
      } else {
        console.log("####" + this.recipeId);

        this.getRecipeDetailById(this.recipeId);
        //        console.log("La recette n'existe pas !");

      }
    }); 
  }

  getRecipeDetailById(id) {
    this.recipeDetail = this.recipesService.getRecipeById(id);
  }

  onClickRecipeDelete(id) {
    this.recipesService.deleteRecipe(id);
    this.router.navigate(['/index']);
  }

}
