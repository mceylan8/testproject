import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) { }

  register(userData: { name: string, email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  logout(token: string) {
    return this.http.post(`${this.apiUrl}/logout`, { token });
  }

  // Methode zur Überprüfung, ob der Benutzer authentifiziert ist
  isAuthenticated(): boolean {
    // Überprüfen, ob ein Token im localStorage vorhanden ist
    const token = localStorage.getItem('token');
    return !!token;  // Gibt true zurück, wenn ein Token vorhanden ist, sonst false
  }
}
