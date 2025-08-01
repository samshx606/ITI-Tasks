import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  @Output() searchChanged = new EventEmitter<string>();
  
  onSearchChange(event: any) {
    const searchTerm = event.target.value;
    this.searchChanged.emit(searchTerm);
  }
}
