import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./app-tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  nameSelected: string = "";

  onSelectUser(id: string) {
    console.log("Selected user with id: " + id);
    this.users.forEach(user => {
      if (user.id === id) {
        this.nameSelected = user.name;
      }
    })
  }
}
