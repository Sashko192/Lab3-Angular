import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = []; // Змінна для зберігання товарів у кошику

  constructor() { }

  // Метод для додавання товару до кошика
  addToCart(product: any) {
    this.items.push(product);
  }

  // Метод для отримання товарів з кошика
  getItems() {
    return this.items;
  }

  // Метод для очищення кошика
  clearCart() {
    this.items = [];
    return this.items;
  }

  // Метод для видалення товару з кошика
  removeFromCart(product: any) {
    const index = this.items.indexOf(product); // Знаходимо індекс товару в масиві
    if (index > -1) {
      this.items.splice(index, 1); // Видаляємо товар, якщо він знайдений
    }
  }
}
