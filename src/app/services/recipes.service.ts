import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';

@Injectable()

export class RecipesService {

  public recipes: Recipe[] = [];

  constructor() { }

  getAllRecipes(): Recipe[] {

    if(localStorage.getItem('localData') !== null){ 
        this.recipes = JSON.parse(localStorage.getItem('localData'));
    } else {
        var recipesData = [
            {
                id: "_ynrad09lz",
                title: 'Recette 1',
                rating: 3,
                type: "chic",
                picture: null
            },
            {
              id: "_1msq9o6yq",
              title: 'Recette 2',
              rating: 4,
              type: "convivial",
              picture: null
          }
        ];
        localStorage.setItem('localData', JSON.stringify(recipesData));
        this.recipes = JSON.parse(localStorage.getItem('localData'));
    }       
    return this.recipes;
  }

  getRecipeById(id: string): Recipe {
    var recipesArray = JSON.parse(localStorage.getItem('localData'));       
    console.log(recipesArray);
    return recipesArray
      .filter(recipe => recipe.id === id)
      .pop();
  }

  addRecipe(recipe): Recipe {
    var recipesArray = JSON.parse(localStorage.getItem('localData'));
    recipe.id = '_' + Math.random().toString(36).substr(2, 9);
    recipe.picture = null;
    recipesArray.push(recipe);
    localStorage.setItem('localData', JSON.stringify(recipesArray));
    return recipe;
  }

  deleteRecipe(id) {
    var recipesArray = JSON.parse(localStorage.getItem('localData'));
     for (var i in recipesArray) {
         if (recipesArray[i].id === id) {
          recipesArray.splice(i, 1);
             localStorage.setItem('localData', JSON.stringify(recipesArray));  
         }
     }    
 };    

}
