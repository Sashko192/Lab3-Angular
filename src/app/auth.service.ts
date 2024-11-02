// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  // Метод для логіна
  login(username: string, password: string): boolean {
    if (username === 'Admin' && password === '12345') {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true'); // Зберігаємо стан у localStorage
      return true;
    }
    return false;
  }

  // Метод для перевірки авторизації
  isAuthenticated(): boolean {
    return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }

  // Метод для логаута
  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }
}
