import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  recipie: Boolean = false
  shopping: Boolean = true
  shoppingChange(){

    this.recipie= false
    this.shopping= true

  }
  recipieChange(temp: Boolean){
   this.recipie= true
   this.shopping= false
  }
}
