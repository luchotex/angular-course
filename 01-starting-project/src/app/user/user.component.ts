import {Component, computed, Input, signal, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);


  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() selectedUser = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }



  onSelectUser () {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.selectedUser.emit(this.id);
  }

}
