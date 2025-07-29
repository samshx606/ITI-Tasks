import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.html',
  styleUrls: ['./profile-card.css']
})
export class ProfileCard {
  image: string = 'https://randomuser.me/api/portraits/men/1.jpg';
  name: string = 'John Doe';
  job: string = 'Web Developer';
  bio: string = 'Passionate about creating beautiful and functional websites. Always learning and exploring new technologies.';
  exist: boolean = true;

  removeProfile() {
    this.exist = false;
  }
}
