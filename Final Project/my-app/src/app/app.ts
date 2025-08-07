import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { UserFormComponent } from './components/user-form.component';
import { UserListComponent } from './components/user-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, UserFormComponent, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('User Management System');
  
  // Using signals for reactive state management
  users = signal<User[]>([]);
  filteredUsers = signal<User[]>([]);
  
  searchForm: FormGroup;
  showForm = false;
  isEditMode = false;
  selectedUser: User | null = null;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });
  }

  ngOnInit() {
    this.loadUsers();
    
    // Subscribe to search form changes
    this.searchForm.get('searchTerm')?.valueChanges.subscribe(searchTerm => {
      this.searchUsers(searchTerm);
    });
  }

  loadUsers() {
    const users = this.userService.getUsers();
    this.users.set(users);
    this.filteredUsers.set(users);
  }

  searchUsers(searchTerm: string) {
    const filtered = this.userService.searchUsers(searchTerm);
    this.filteredUsers.set(filtered);
  }

  openAddForm() {
    this.isEditMode = false;
    this.selectedUser = null;
    this.showForm = true;
  }

  openEditForm(user: User) {
    this.isEditMode = true;
    this.selectedUser = user;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.isEditMode = false;
    this.selectedUser = null;
  }

  onFormSubmit(formData: {username: string, email: string, id?: string}) {
    if (this.isEditMode && formData.id) {
      this.userService.updateUser(formData.id, formData.username, formData.email);
    } else {
      this.userService.addUser(formData.username, formData.email);
    }
    this.loadUsers();
    this.closeForm();
  }

  onUserDelete(user: User) {
    this.userService.deleteUser(user.id);
    this.loadUsers();
  }
}
