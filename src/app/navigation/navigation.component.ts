import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service'; 

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isAuthenticated = false; 

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated(); 
  }

  logout() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.logout(token);
    }
    
  }
}
