import { Component } from '@angular/core';
import { Card } from '../card/card';
import { UserService } from '../../services/user-service';
import { Search } from '../search/search';

@Component({
  selector: 'app-card-list',
  imports: [Card, Search],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css'
})
export class CardList {
  allCards: { id: number; avatar: string; name: string; job: string; bio: string; isLast?: boolean }[] = [];
  cards: { id: number; avatar: string; name: string; job: string; bio: string; isLast?: boolean }[] = [];
  constructor(private userService: UserService) {
    const users = this.userService.getUsers();
    this.allCards = users.map(user => ({
      id: user.id,
      avatar: user.avatar,
      name: user.name,
      job: user.job,
      bio: user.bio
    }));
    this.cards = [...this.allCards];
    this.updateLastCard();
  }
  onRemoveCard(id: number) {
    this.userService.deleteUser(id);
    this.allCards = this.allCards.filter(card => card.id !== id);
    this.cards = this.cards.filter(card => card.id !== id);
    this.updateLastCard();
  }

  onSearchChange(searchTerm: string) {
    searchTerm = searchTerm.trim();
    
    if (searchTerm === '') {
      // Show all cards when search is empty
      this.cards = [...this.allCards];
    } else {
      this.cards = this.allCards.filter(card =>
        card.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    }
    if(this.cards[this.cards.length-1].isLast == false)
      this.cards[this.cards.length-1].isLast = true;
    this.updateLastCard();
  }

  private updateLastCard() {
    if(this.cards.length > 0 && !this.cards[this.cards.length - 1]) {
      this.cards[this.cards.length - 1].isLast = true;
    }
  }
}