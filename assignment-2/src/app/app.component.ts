import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'assignment-2';
  status= true;
  onchange(event: any){
    this.username= event.target.value;
    if(this.username=="") {this.status=true;}
    
    else this.status=false  
    console.log(this.username)
  }
  onClick(){
    this.username=""
  }
}
