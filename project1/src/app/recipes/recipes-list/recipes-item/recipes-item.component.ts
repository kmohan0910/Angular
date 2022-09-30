import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
 @Input() recipes: Recipe = new Recipe( "a", "b", "c");
 @Output() sendrecipes = new EventEmitter<String>();


  constructor() { }
eventClicked( ){
this.sendrecipes.emit("sdfkjs")
}
  ngOnInit(): void {
console.log(this.recipes)  }

}
