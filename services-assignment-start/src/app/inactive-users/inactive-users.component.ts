import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
 
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private  user: Users){
    this.users =this.user.getUsers("inactive")
  }

  onSetToActive(id: number) {
    this.user.updateUsers(id, "inactive")
  }
}
