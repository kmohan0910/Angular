import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { SelectComponent } from './recipes/select/select.component';
const Routes: Routes= [
  {path:'', redirectTo:'recipes',component: RecipesComponent, pathMatch:'full'},
  {path:'shopping', component : ShoppingListComponent},
  {path: 'recipes', component : RecipesComponent, children:[
    {path : '', component: SelectComponent},
    {path : ':id', component: RecipeDetailComponent}
  
  ]}]

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]  
})
export class AppRoutesModule { }
