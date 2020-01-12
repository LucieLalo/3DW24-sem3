import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'index',
      pathMatch: 'full'
  },
  {
      path: 'index',
      loadChildren: () => import('./components/index/index.module').then(mod => mod.IndexModule)
  },
  {
    path: 'add-recipe',
    loadChildren: () => import('./components/add-recipe/add-recipe.module').then(mod => mod.AddRecipeModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./components/recipe/recipe.module').then(mod => mod.RecipeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting { }
