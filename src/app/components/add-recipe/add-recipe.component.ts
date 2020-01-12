import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../model/recipe';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  public recipeDetail = <Recipe>{};

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private recipesService: RecipesService ) { }

  ngOnInit() {
    this.recipeDetail['id'] = 0;
  }

  onRecipeSubmitForm(form) {
    console.log(form);
    if(form.valid) {
        this.recipesService.addRecipe(this.recipeDetail);
        this.router.navigate(['/index']);
    }
  }
  onClickCancel() {
    this.router.navigate(['/index']);
  }

}
