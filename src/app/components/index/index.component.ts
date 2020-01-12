import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../model/recipe';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public recipes: Recipe[] = [];
  constructor( private router: Router, private recipesService: RecipesService ) { }
  
  ngOnInit() {
    this.loadAllRecipes();
  }

  loadAllRecipes() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  openRecipeDetail(id) {
    this.router.navigate(['/recipe'], {queryParams: {id: id}});
  }

}
