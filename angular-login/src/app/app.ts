import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userId: string = '';
  password: string = '';
  loginMessage: string = '';
  isLoggedIn: boolean = false;

  onSubmit(): void {
    if (this.userId && this.password) {
      // Simple validation - in a real app, this would authenticate against a backend
      if (this.userId.trim() !== '' && this.password.trim() !== '') {
        this.isLoggedIn = true;
        this.loginMessage = `Welcome, ${this.userId}!`;
      } else {
        this.loginMessage = 'Please enter valid credentials.';
      }
    } else {
      this.loginMessage = 'Please fill in all fields.';
    }
  }

  logout(): void {
    this.userId = '';
    this.password = '';
    this.loginMessage = '';
    this.isLoggedIn = false;
  }
}
