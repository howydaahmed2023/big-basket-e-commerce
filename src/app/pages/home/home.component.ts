import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Products } from '../../interface/products';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products?:Products[]
  productSrv=inject(ProductsService)
ngOnInit(): void {
this.getProducts()
}
getProducts(){
  this.productSrv.getAllProducts().subscribe({
    next :(res:any)=>{
      this.products = res.data as Products[]
      console.log(this.products)

    },error :(error)=>console.log('Error Fetching API',error)
  })
}
}
