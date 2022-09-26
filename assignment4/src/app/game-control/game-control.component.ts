import { Component, EventEmitter, Input, OnInit , DoCheck, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit , DoCheck {

  @Output() intervalFired = new EventEmitter< number>()
  lastNumber : number=0
  interval: ReturnType<typeof setInterval> | undefined
//since it was throwing error for type timer
  ngDoCheck(): void {
      
  }
  intervalTriggered=()=>{

      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;

  }
  


  constructor() { }
  

  ngOnInit(): void {
  }

  startGame(){

    this.interval=setInterval(this.intervalTriggered,1000)

  }
  stopGame(){
    clearInterval(this.interval)

  }

}
