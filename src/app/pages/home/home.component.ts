import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product, Products } from '../../interface/products';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  mainImage: string = '';
  selectedSize: string = 'medium';
  quantity: number = 1;
  showFullDescription:boolean = false;
  relatedProducts: Product[] = [];
  constructor(private productService: ProductsService,private router:Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res.data;
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  openProduct(product: Product): void {
      this.selectedProduct = product;
      this.quantity = 1;
      this.selectedSize = 'medium';
      this.showFullDescription = true;

      this.relatedProducts = this.products.filter(
        p => p.category?._id === product.category?._id && p.id !== product.id
      ).slice(0, 6); // Top 6 from same category
      console.log(this.selectedProduct.description.length)
  }

  closeModal(): void {
    this.selectedProduct = null;
  }
  addToCart(product: Product): void {
    if (typeof window === 'undefined') return;
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const exists = cart.find(p => p.id === product.id);
    if (!exists) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('✅ تمت إضافة المنتج إلى السلة');
    } else {
      alert('ℹ️ المنتج موجود بالفعل في السلة');
    }
  }
  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) this.quantity--;
  }


}
