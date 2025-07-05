import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicedataService } from '../../servicedata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
products:any[]=[]
  constructor( private _service:ServicedataService){
  }

  
ngOnInit(): void {
  this.getallapi();
}



getallapi() {
  this._service.getallproduct().subscribe((res: any) => {
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
