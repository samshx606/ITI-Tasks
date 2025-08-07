import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="popup-overlay" (click)="closeForm()">
      <div class="popup-content" (click)="$event.stopPropagation()">
        <div class="popup-header">
          <h3>{{ isEdit ? 'Edit User' : 'Add New User' }}</h3>
          <button class="close-btn" (click)="closeForm()">&times;</button>
        </div>
        
        <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              formControlName="username"
              [class.error]="userForm.get('username')?.invalid && userForm.get('username')?.touched">
            <div class="error-message" *ngIf="userForm.get('username')?.invalid && userForm.get('username')?.touched">
              Username is required (minimum 3 characters)
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              formControlName="email"
              [class.error]="userForm.get('email')?.invalid && userForm.get('email')?.touched">
            <div class="error-message" *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched">
              Please enter a valid email address
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn btn-cancel" (click)="closeForm()">Cancel</button>
            <button type="submit" class="btn btn-primary" [disabled]="userForm.invalid">
              {{ isEdit ? 'Update' : 'Add' }} User
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .popup-content {
      background: white;
      border-radius: 8px;
      padding: 0;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .popup-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #eee;
    }

    .popup-header h3 {
      margin: 0;
      color: #333;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #999;
    }

    .close-btn:hover {
      color: #333;
    }

    form {
      padding: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #333;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
      box-sizing: border-box;
    }

    input.error {
      border-color: #e74c3c;
    }

    .error-message {
      color: #e74c3c;
      font-size: 14px;
      margin-top: 5px;
    }

    .form-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }

    .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    .btn-cancel {
      background-color: #95a5a6;
      color: white;
    }

    .btn-cancel:hover {
      background-color: #7f8c8d;
    }

    .btn-primary {
      background-color: #3498db;
      color: white;
    }

    .btn-primary:hover {
      background-color: #2980b9;
    }

    .btn:disabled {
      background-color: #bdc3c7;
      cursor: not-allowed;
    }
  `]
})
export class UserFormComponent implements OnInit {
  @Input() isEdit = false;
  @Input() user: User | null = null;
  @Output() formSubmit = new EventEmitter<{username: string, email: string, id?: string}>();
  @Output() formClose = new EventEmitter<void>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    if (this.isEdit && this.user) {
      this.userForm.patchValue({
        username: this.user.username,
        email: this.user.email
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = {
        username: this.userForm.value.username,
        email: this.userForm.value.email,
        ...(this.isEdit && this.user ? { id: this.user.id } : {})
      };
      this.formSubmit.emit(formData);
      this.closeForm();
    }
  }

  closeForm() {
    this.formClose.emit();
  }
}
