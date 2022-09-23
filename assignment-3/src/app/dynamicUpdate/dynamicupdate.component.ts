

import {Component, OnInit} from '@angular/core';

@Component({
    selector : 'dynamic-update',
    templateUrl : './dynamicupdate.component.html',
    styleUrls: ['./dynamicupdate.component.css']

})
export class DynamicUpdate implements OnInit{

    constructor(){}
    ngOnInit(){


    }
    status=["1", "2"]
}