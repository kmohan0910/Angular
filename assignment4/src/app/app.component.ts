import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';
  evenserver: number[]=[]
  oddserver: number[]=[]
  triggered(number: number){
    if (number%2==0){
      this.evenserver.push(number)
    }else this.oddserver.push(number)
   
      console.log(number)
  }
}
