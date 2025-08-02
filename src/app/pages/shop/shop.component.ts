import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
products:any[]=[]

  productSrv = inject(ProductsService)


ngOnInit(): void {
  this.getAllApi();
}



getAllApi() {
  this.productSrv.getAllProducts().subscribe((res: any) => {
    this.products = res.data.map((product: any) => ({
      ...product,
      addtocart: false,
      count:0

    }));
    // console.log(this.products)

  });

}

// Add to cart
toggleCart(product: any) {
  product.addtocart = true;

  setTimeout(() => {
    product.addtocart = false;
  }, 1000);
}

increase(product:any){
  // console.log(product)
  product.count++
}

decrease(product:any){
  if (product.count > 0 ) {
    product.count--
  }
}








}
