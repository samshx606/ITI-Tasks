import { Component, signal } from '@angular/core';
import { User } from '../user/user';
import { UserInterface, UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-list',
  imports: [User],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users = signal<UserInterface[]>([]);
  ngOnInit() {
    this.userService.fetchUsers().subscribe(users => {
      this.users.set(users);
    });
  }
  
  constructor(private userService: UserService) {}
  onRemoveUser(id: number) {
    this.userService.deleteUser(id);
  }
}
