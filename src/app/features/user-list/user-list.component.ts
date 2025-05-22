import { Component, computed, input, output, Signal, signal } from '@angular/core';
import { UserComponent } from "./user/user.component";
import { User } from './user/user.model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [UserComponent],
  templateUrl: "user-list.component.html",
  styleUrl: "user-list.component.css",
})
export class UserListComponent {

  users: Signal<Array<User>> = computed(() => []);

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = computed(() => this.userService.getAll());
  }

  //selectedUser = computed(() => this.users.find(user => user.id === this.selectedUserId()) as User);

  selectedUserId = signal<string | undefined>(undefined);

  userSelectEvent = output<User>();

  onSelectUser(user: User) {
    this.selectedUserId.set(user.id);
    this.userSelectEvent.emit(user)
  }

}
