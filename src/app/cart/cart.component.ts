import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../cart.service'; 
import { RouterModule } from '@angular/router'; 
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; 
import { CustomerData } from '../cart/customer-data.model'; 

@Component({
  selector: 'app-cart',
  standalone: true, 
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = []; 
  checkoutForm: FormGroup; 

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({ 
      name: [''], 
      address: [''] 
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: CustomerData): void { 
    console.warn("Your order has been submitted", customerData);
    this.items = this.cartService.clearCart(); 
    this.checkoutForm.reset(); 
  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getItems(); 
    window.alert(`${product.name} видалений з кошика!`); 
  }
}
