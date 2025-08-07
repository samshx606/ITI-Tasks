import { Component } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-list',
  imports: [User],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users: { id: number; avatar: string; name: string; job: string; bio: string }[] = [];
  constructor(private userService: UserService) {
    this.users = this.userService.getUsers().map(user => ({
      id: user.id,
      avatar: user.avatar,
      name: user.name,
      job: user.job,
      bio: user.bio
    }));
  }
  onRemoveUser(id: number) {
    this.userService.deleteUser(id);
    this.users = this.users.filter(user => user.id !== id);
  }
}
