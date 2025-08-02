import { Component, inject, OnInit } from '@angular/core';
import { allProducts } from '../../interface/products';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any | allProducts[];
  productsSrv = inject(ProductsService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res: ParamMap) => {
      console.log('paramMap', res.get('id'));
      const id = Number(res.get('id'));
      this.productsSrv.getProductById(id).subscribe((product: any) => {
        console.log(product);
        if (!product) {
          this.router.navigateByUrl('/');
          return;
        }
        this.product = product;
      });
    });
  }
}
