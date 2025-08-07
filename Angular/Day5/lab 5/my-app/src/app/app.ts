import { Component, signal } from '@angular/core';
import { SignupForm } from './components/signup-form/signup-form';

@Component({
  selector: 'app-root',
  imports: [SignupForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
