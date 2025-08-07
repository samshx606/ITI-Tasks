import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() id: number = 0;
  @Input() avatar: string = '';
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() bio: string = '';

  constructor(private router: Router) {}
  @Output() removeUser = new EventEmitter<number>();

  onRemoveClicked() {
    this.removeUser.emit(this.id);
  }
  onViewClicked() {
    this.router.navigate(['/users', this.id]);
  }
}
