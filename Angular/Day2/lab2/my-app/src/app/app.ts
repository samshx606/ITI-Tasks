import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardList } from './components/card-list/card-list';
import { Search } from './components/search/search';
@Component({
  selector: 'app-root',
  imports: [CardList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
