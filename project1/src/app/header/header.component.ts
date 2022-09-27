

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})

export class header {
    @Output() recipie  = new EventEmitter<Boolean>()// what is overload?
    currentRecipie : Boolean = false 

    selectRecipie=()=>{
            this.recipie.emit(!this.currentRecipie)
            this.currentRecipie=!this.recipie
    }
 @Output() shopping = new EventEmitter<Boolean>();
 isshopping : Boolean = false
    selectShopping(){

        this.shopping.emit(true)

    }
    constructor() {}
   
}