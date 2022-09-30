import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private user : Users){
  this.users=this.user.getUsers("active")
  }
  onSetToInactive(id: number) {
    this.user.updateUsers(id, "active")
  }

}
