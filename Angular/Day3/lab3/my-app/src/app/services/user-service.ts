import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: UserInterface[] = [
    {
      id: 1,
      name: 'John Doe',
      job: 'Software Engineer',
      bio: 'A passionate software engineer with a love for coding.',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      job: 'Product Manager',
      bio: 'An experienced product manager who loves building great products.',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      job: 'UX Designer',
      bio: 'A creative UX designer focused on user-centered design.',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      id: 4,
      name: 'Bob Brown',
      job: 'Data Scientist',
      bio: 'A data scientist who enjoys turning data into insights.',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      id: 5,
      name: 'Charlie Green',
      job: 'DevOps Engineer',
      bio: 'A DevOps engineer with a passion for automation and efficiency.',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
      id: 6,
      name: 'Diana White',
      job: 'QA Engineer',
      bio: 'A QA engineer dedicated to ensuring software quality.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    {
      id: 7,
      name: 'Ethan Black',
      job: 'Frontend Developer',
      bio: 'A frontend developer who loves creating beautiful user interfaces.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
      id: 8,
      name: 'Fiona Blue',
      job: 'Backend Developer',
      bio: 'A backend developer focused on building robust server-side applications.',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    {
      id: 9,
      name: 'George Yellow',
      job: 'Full Stack Developer',
      bio: 'A full stack developer with expertise in both frontend and backend technologies.',
      avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
    },
    {
      id: 10,
      name: 'Hannah Purple',
      job: 'System Administrator',
      bio: 'A system administrator who ensures the smooth operation of IT systems.',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg'
    }
  ];
  getUsers(): UserInterface[] {
    return this.users;
  }
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
  getUserById(id: number): UserInterface | undefined {
    return this.users.find(user => user.id === id);
  }
}
export interface UserInterface {
  id: number;
  name: string;
  job: string;
  bio: string;
  avatar: string;
}
