import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  selectedRecipe(){
    console.log("hi")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
