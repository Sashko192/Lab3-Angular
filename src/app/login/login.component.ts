import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Фейкові дані
    const validUsername = 'Admin';
    const validPassword = '12345';

    if (this.username === validUsername && this.password === validPassword) {
      // Якщо дані коректні, зберігаємо авторизацію в localStorage
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/profile']); // Переходимо на сторінку профілю
    } else {
      // Якщо дані некоректні, показуємо повідомлення
      this.errorMessage = 'Ім\'я користувача або пароль введені не вірно';
    }
  }
}
