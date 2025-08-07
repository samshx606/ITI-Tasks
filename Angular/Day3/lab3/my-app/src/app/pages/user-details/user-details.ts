import { Component } from '@angular/core';
import { UserInterface, UserService } from '../../services/user-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {
  user!: UserInterface | undefined;

  constructor(private userService: UserService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const userId: number = parseInt(this.activatedRoute.snapshot.params['id']);
    this.user = this.userService.getUserById(userId);
    if (!this.user) {
      this.router.navigate(['/not-found']);
    }
  }

  backToUsers(): void {
    this.router.navigate(['/users']);
  }
}
