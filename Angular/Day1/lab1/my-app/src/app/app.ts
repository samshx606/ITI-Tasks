import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProfileCard],
  template: `
    <main>
      <app-profile-card></app-profile-card>
    </main>
  `,
  styles: []
})
export class App {
  title = 'profile-card-app';
}