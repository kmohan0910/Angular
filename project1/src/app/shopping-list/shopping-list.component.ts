import {Component} from '@angular/core'
import { Ingredient } from '../shared/ingredients.model';

@Component({
    selector : 'app-shoppingList',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class shoppingList {
    ingredients : Ingredient[]=[new Ingredient('Apples ', 5), new Ingredient('Orange', 5)];

}
