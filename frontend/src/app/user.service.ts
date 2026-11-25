import { Injectable } from '@angular/core';

export interface User {
    username: string;
    email: string;
    phone: string;
    region: string;
    bio: string;
    password: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
    users: User[] = [];

    register(user: User): string | null {
        if (this.users.some(u => u.username === user.username)) {
        return 'Username is taken.';
        }
        this.users.push(user);
        console.log('Users:', this.users);
        return null;
    }
}