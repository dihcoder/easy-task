import { Component, computed, input, output } from '@angular/core';

import { User } from './user.model';
import { CardComponent } from "../../../shared/components/card/card.component";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: "user.component.html",
  styleUrl: "user.component.css"
})
export class UserComponent {

  // Input decorator
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // Signal based input function (are read-only signals)
  // avatar = input.required<string>();
  // name = input.required<string>();

  // @Input({required: true}) id!: string;

  user = input.required<User>();
  selected = input.required<boolean>();

  // Output decorator and with generic type
  // @Output() select = new EventEmitter();
  // @Output() select = new EventEmitter<string>();

  // output function (uses EventEmitter by default but not signals)
  selectEvent = output<User>();

  // getter (we don't call it as a function, we use it as a property)
  // get imagePath() {
  //   return `assets/users/${this.avatar()}`
  // }

  imagePath = computed(() => `assets/users/${this.user().avatar}`)

  // signals
  //selectedUser = signal(DUMMY_USERS[randomIndex]);

  // computed function to use with signals
  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  onSelectUser() {
    this.selectEvent.emit(this.user());
    //console.log(`User ${this.selectedUser().name} selected`);
  }
}
