import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-list">
      <div *ngIf="users.length === 0" class="no-users">
        <p>No users found. Click "Add New User" to get started!</p>
      </div>
      
      <div *ngIf="users.length > 0" class="users-grid">
        <div *ngFor="let user of users" class="user-card">
          <div class="user-info">
            <h4>{{ user.username }}</h4>
            <p class="email">{{ user.email }}</p>
            <p class="user-id">ID: {{ user.id }}</p>
          </div>
          <div class="user-actions">
            <button class="btn btn-edit" (click)="editUser(user)">Edit</button>
            <button class="btn btn-delete" (click)="deleteUser(user)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .user-list {
      margin-top: 20px;
    }

    .no-users {
      text-align: center;
      padding: 40px;
      background-color: #f8f9fa;
      border-radius: 8px;
      border: 2px dashed #dee2e6;
    }

    .no-users p {
      font-size: 18px;
      color: #6c757d;
      margin: 0;
    }

    .users-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .user-card {
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .user-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .user-info h4 {
      margin: 0 0 10px 0;
      color: #333;
      font-size: 18px;
    }

    .user-info .email {
      color: #666;
      margin: 5px 0;
      font-size: 14px;
    }

    .user-info .user-id {
      color: #999;
      font-size: 12px;
      font-family: monospace;
      margin: 10px 0;
    }

    .user-actions {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }

    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      flex: 1;
    }

    .btn-edit {
      background-color: #f39c12;
      color: white;
    }

    .btn-edit:hover {
      background-color: #e67e22;
    }

    .btn-delete {
      background-color: #e74c3c;
      color: white;
    }

    .btn-delete:hover {
      background-color: #c0392b;
    }
  `]
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() userEdit = new EventEmitter<User>();
  @Output() userDelete = new EventEmitter<User>();

  editUser(user: User) {
    this.userEdit.emit(user);
  }

  deleteUser(user: User) {
    if (confirm(`Are you sure you want to delete user "${user.username}"?`)) {
      this.userDelete.emit(user);
    }
  }
}
