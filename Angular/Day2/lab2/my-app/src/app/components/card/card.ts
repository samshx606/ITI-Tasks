import { Component, EventEmitter, inject, Input, input, Output, output } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() isLast: boolean = false;
  @Input() id: number = 0;
  @Input() avatar: string = '';
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() bio: string = '';
  
  @Output() removeCard = new EventEmitter<number>();
  
  onRemoveClicked() {
    this.removeCard.emit(this.id);
  }
}
