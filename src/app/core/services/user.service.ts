import { Injectable } from '@angular/core';
import { User } from '../../features/user-list/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 'u1',
      name: 'Jasmine Washington',
      avatar: 'user-1.jpg',
    },
    {
      id: 'u2',
      name: 'Emily Thompson',
      avatar: 'user-2.jpg',
    },
    {
      id: 'u3',
      name: 'Marcus Johnson',
      avatar: 'user-3.jpg',
    },
    {
      id: 'u4',
      name: 'David Miller',
      avatar: 'user-4.jpg',
    },
    {
      id: 'u5',
      name: 'Priya Patel',
      avatar: 'user-5.jpg',
    },
    {
      id: 'u6',
      name: 'Arjun Singh',
      avatar: 'user-6.jpg',
    },
  ]

  getAll() {
    return this.users;
  }

  getById(id: string) {
    return this.users.find(user => user.id === id);
  }

  update(id: string, user: User) {
    const index = this.users.findIndex(t => t.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...user };
    }
  }

  delete(id: string) {
    this.users = this.users.filter(user => user.id !== id);
  }

  create(user: User) {
    this.users.unshift(user);
    // this.users = [user, ...this.users];
  }
}
