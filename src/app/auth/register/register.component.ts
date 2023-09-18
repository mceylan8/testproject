import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.password !== this.repeatPassword) {
      alert('Passwords do not match!');
      return;
    }
    this.authService
      .register({ name: this.name, email: this.email, password: this.password })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
