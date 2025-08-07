import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly STORAGE_KEY = 'users';

  constructor() { }

  // Generate unique ID based on timestamp
  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  // Get all users from localStorage
  getUsers(): User[] {
    const users = localStorage.getItem(this.STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  }

  // Add new user
  addUser(username: string, email: string): User {
    const users = this.getUsers();
    const newUser: User = {
      id: this.generateId(),
      username,
      email
    };
    users.push(newUser);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    return newUser;
  }

  // Update existing user
  updateUser(id: string, username: string, email: string): void {
    const users = this.getUsers();
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { id, username, email };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    }
  }

  // Delete user
  deleteUser(id: string): void {
    const users = this.getUsers();
    const filteredUsers = users.filter(user => user.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredUsers));
  }

  // Search users by username or email
  searchUsers(searchTerm: string): User[] {
    const users = this.getUsers();
    if (!searchTerm) return users;
    
    return users.filter(user => 
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
