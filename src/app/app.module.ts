import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Імпорт RouterModule та Routes
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component'; // Імпорт standalone компоненту деталей продукту
import { CartComponent } from './cart/cart.component'; // Імпорт standalone компоненту кошика
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Імпорт AppRoutingModule
import { ProfileComponent } from './profile/profile.component'; // Імпорт standalone ProfileComponent

// Визначаємо маршрути
const routes: Routes = [
  { path: '', component: ProductListComponent }, // Основний маршрут
  { path: 'products/:productId', component: ProductDetailsComponent }, // Маршрут для деталей продукту
  { path: 'cart', component: CartComponent }, // Маршрут для кошика
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // Додайте цю кому
  { path: 'login', component: LoginComponent } // Додайте цей маршрут
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    TopBarComponent,
    LoginComponent // Додайте LoginComponent тут
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Імпортуйте AppRoutingModule
    RouterModule.forRoot(routes), // Додаємо маршрути
    FormsModule,
    CartComponent, // Імпортуємо standalone компонент
    ProductDetailsComponent, // Імпортуємо standalone компонент
    ProfileComponent // Імпортуємо standalone ProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
