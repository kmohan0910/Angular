import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import {Router , ActivatedRoute, Params} from "@angular/router"

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,private route : Router, private routes : ActivatedRoute) { }


  ngOnInit() {
   this.routes.params.subscribe(
    (data: Params)=>{
     this.id= +data["id"]
     this.recipe= this.recipeService.getRecipe(this.id)

    }

  )
  }
  

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
