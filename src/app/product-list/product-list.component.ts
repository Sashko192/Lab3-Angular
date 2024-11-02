import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'MediCom Toy - Bear Plush',
      description: 'Soft and cuddly bear plush toy for all ages.',
      image: 'https://werare.com.ua/image/catalog/i/im/bg/14f80d42bb22f2711e72a641dae88b80.jpg'
    },
    {
      id: 2,
      name: 'MediCom Toy - Dinosaur Figure',
      description: 'Realistic dinosaur figure for imaginative play.',
      image: 'https://werare.com.ua/image/cache/webp/catalog/i/ne/oe/e1859ce1ee9a61cad96bba7b503ecf4d-652x733.webp'
    },
    {
      id: 3,
      name: 'MediCom Toy - Robot Toy',
      description: 'Interactive robot toy with multiple functions.',
      image: 'https://werare.com.ua/image/cache/webp/catalog/i/mh/fo/98702a232b1e812047d65b6099a1b9b5-652x733.webp'
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product); 
    window.alert(`${product.name} доданий до кошика!`);
  }

  share() {
    window.alert('Товар був поширений!');
  }
}
