import { HttpClient } from '@angular/common/http';
import { Injectable, signal} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = 'https://jsonplaceholder.typicode.com/users';
  private users = signal<UserInterface[]>([]);

  constructor(private http: HttpClient) {

   }

  fetchUsers(): Observable<UserInterface[]> {
    return this.http.get<any[]>(this.endpoint).pipe(
      map(users => users
        .filter(user => user.id > 4)
        .map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          website: user.website
        }))
    ));
  }

  getUsers() {
    console.log('Fetching users:', this.users());
    return this.users;
  }
  
  deleteUser(id: number): void {
    this.users.update(users => users.filter(user => user.id !== id));
  }
  getUserById(id: number): UserInterface | undefined {
    return this.users().find(user => user.id === id);
  }
}
export interface UserInterface {
  id: number;
  name: string;
  email: string;
  website: string;
}
