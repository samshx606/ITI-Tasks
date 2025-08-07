import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';
import { NotFound } from './pages/not-found/not-found';
import { UserDetails } from './pages/user-details/user-details';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'users', component: Users },
    { path: 'users/:id', component: UserDetails },
    { path: '**', component: NotFound} 
];
