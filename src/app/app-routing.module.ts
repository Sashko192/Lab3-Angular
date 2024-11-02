import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },          // Головна сторінка
  { path: 'news', component: NewsComponent },      // Сторінка з новинами
  { path: 'login', component: LoginComponent },    // Сторінка логіну
  { path: 'cart', component: CartComponent },      // Сторінка кошика
  { path: 'products', component: ProductListComponent }, // Сторінка зі списком продуктів
  { path: 'product/:productId', component: ProductDetailsComponent }, // Сторінка з деталями продукту
  { path: '**', redirectTo: '' }                   // Перенаправлення на головну для невідомих маршрутів
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
