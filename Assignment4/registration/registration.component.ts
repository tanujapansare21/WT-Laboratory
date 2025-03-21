import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegistrationComponent {
  firstname: string = '';
  lastname: string = '';
  mobile: string = '';
  altmobile: string = '';
  address: string = '';
  username: string = '';
  email: string = '';
  altemail: string = '';
  password: string = '';

  constructor(private router: Router) {}

  completeRegistration() {
    if (this.isFormValid()) {
      // Store user credentials in localStorage
      localStorage.setItem('registeredUsername', this.username);
      localStorage.setItem('registeredPassword', this.password);
      
      alert('Registration successful!');
      this.redirectToLogin();
    } else {
      this.showValidationErrors();
    }
  }

  private showValidationErrors() {
    if (!this.username || !this.password) {
      alert('Please enter both username and password');
      return;
    }

    let errorMessage = '';
    if (!this.firstname || !this.lastname) {
      errorMessage += 'Name fields are required\n';
    }
    if (!this.mobile?.match(/^[0-9]{10}$/)) {
      errorMessage += 'Mobile number must be 10 digits\n';
    }
    if (!this.email) {
      errorMessage += 'Email is required\n';
    }
    if (!this.address) {
      errorMessage += 'Address is required\n';
    }
    if (this.password.length < 6) {
      errorMessage += 'Password must be at least 6 characters long\n';
    }

    if (errorMessage) {
      alert('Please fix the following errors:\n\n' + errorMessage);
    }
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  private isFormValid(): boolean {
    return !!(
      this.firstname &&
      this.lastname &&
      this.mobile?.match(/^[0-9]{10}$/) &&
      this.address &&
      this.email &&
      this.username &&
      this.password?.length >= 6
    );
  }
}