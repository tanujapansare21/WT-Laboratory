import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showError: boolean = false;
  errorMessage: string = '';
  loginSuccessful: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    const storedUsername = localStorage.getItem('registeredUsername');
    const storedPassword = localStorage.getItem('registeredPassword');
    
    if (storedUsername && storedPassword) {
      if (this.username === storedUsername && this.password === storedPassword) {
        this.loginSuccessful = true;
        this.showError = false;
        console.log('Login successful!');
        alert('Login successful! Welcome ' + this.username);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
      } else {
        this.loginSuccessful = false;
        this.showError = true;
        this.errorMessage = 'Invalid username or password';
        alert('Invalid credentials. Please try again.');
      }
    } else {
      this.loginSuccessful = false;
      this.showError = true;
      this.errorMessage = 'User not registered';
      alert('User not found. Please register first.');
    }
  }

  redirectToRegister() {
    this.router.navigate(['/registration']);
  }
}