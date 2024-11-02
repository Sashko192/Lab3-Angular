import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');

    this.product = { 
      id: productId, 
      name: 'Example Product', 
      price: 100, 
      description: 'This is an example product.' 
    }; 
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    window.alert("Your product has been added to the cart!");
  }
}
