import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddRecipeRoutingModule } from './add-recipe-routing.module';
import { AddRecipeComponent } from './add-recipe.component';
import { RecipesService } from '../../services/recipes.service';
//import { ImageService } from '../../services/image.service';

@NgModule({
  declarations: [AddRecipeComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddRecipeRoutingModule
  ],
  providers: [
    RecipesService,
    //ImageService
  ]
})
export class AddRecipeModule { }
