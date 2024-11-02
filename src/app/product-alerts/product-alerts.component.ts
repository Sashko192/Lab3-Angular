import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: any; // Визначте тип product, якщо можливо
  @Output() notify = new EventEmitter<void>(); // Вивід події

  constructor() {}

  ngOnInit(): void {
    // Ініціалізація, якщо потрібно
  }

  onNotify(): void {
    this.notify.emit(); // Викликає подію notify
    window.alert('You will be notified when the product goes on sale');
  }
}
