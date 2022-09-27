import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe[]=[
new Recipe('ATest Recipe', "ARecipe", 'https://images.app.goo.gl/ett11bNsZsdMTvq86'), new Recipe('BTest Recipe', "ARecipe", 'https://images.app.goo.gl/ett11bNsZsdMTvq86')];
@Output() recipewasSelected = new EventEmitter<Recipe>();
recipeSelected(recipe: Recipe){
this.recipewasSelected.emit(recipe)


}
  constructor() { }

  ngOnInit(): void {
  }

}
