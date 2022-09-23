import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-3';
  isvisible=false;
  status: number[]=[];
  update(){
    this.isvisible= !this.isvisible
    this.status.push(this.status.length+1)
  }
}
