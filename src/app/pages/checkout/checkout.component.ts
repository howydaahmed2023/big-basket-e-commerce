import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interface/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule,],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cart: Product[] = [];
    total: number = 0;
    userInfo = {
    name: '',
    address: '',
    phone: ''
  };
  user = {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: ''
  };
    ngOnInit(): void {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const cartData = localStorage.getItem('cart');
        this.cart = cartData ? JSON.parse(cartData) : [];
        this.calculateTotal();
      }
    }

  calculateTotal(): void {
      this.total = this.cart.reduce((sum, item) =>
        sum + (item.priceAfterDiscount || item.price), 0);
  }

  removeFromCart(productId: string): void {
    if (typeof window === 'undefined') return;

    this.cart = this.cart.filter(p => p.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.calculateTotal();
  }

  showToast = false;

  proceed(): void {
    if (this.userInfo.name && this.userInfo.address && this.userInfo.phone) {
      this.cart = [];
      localStorage.removeItem('cart');
      this.calculateTotal();
      this.showToast = true;

      // إغلاق تلقائي بعد 60 ثانية
      setTimeout(() => {
        this.showToast = false;
      }, 60000);
    } else {
      alert('يرجى ملء جميع الحقول قبل إتمام الطلب.');
    }
  }

  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart');
    this.calculateTotal();
    alert('تم مسح السلة بنجاح');
  }
}
