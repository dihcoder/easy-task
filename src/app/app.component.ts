import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserListComponent } from "./features/user-list/user-list.component";
import { TasksComponent } from "./features/tasks/tasks.component";
import { User } from './features/user-list/user/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserListComponent, TasksComponent],
  templateUrl: "app.component.html",
  styleUrl: "app.component.css",
})
export class AppComponent {
  selectedUser = signal<User | undefined>(undefined);

  onSelectUser(user: User) {
    this.selectedUser.set(user);
  }

}
