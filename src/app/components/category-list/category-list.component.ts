import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { allProducts, Categories, Category, Products } from '../../interface/products';

@Component({
  selector: 'app-category-list',
  imports: [],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
 allProducts:any=[]
show:Boolean=true
   categories?:Categories[]

  productSrv = inject(ProductsService)
  ngOnInit(): void {
 this.getCategories();


      }
       getCategories(){
          this.productSrv.getAllCategories().subscribe({
            next :(res)=>{
console.log(res);
      this.categories = res as Categories[]
      console.log(this.categories)
            },error :(error)=>console.log("Error fetching categories",error)
          })
        }
        onCategoryClick(id: number){
            this.productSrv.getProductByCat(id).subscribe(
            {next :(res:any)=>{
this.allProducts = res
console.log(this.allProducts)
            },error :(error)=>console.log(error)
            }
          )
 this.show=false
          }

  }


