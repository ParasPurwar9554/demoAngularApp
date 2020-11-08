import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../home-service/product-data.service';
import { HomecategoryService } from '../../home-service/homecategory.service';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  productArrById:any = [];

  constructor(private _homecategoryService:HomecategoryService,private data:ProductDataService,private router: Router) { }
  
  productId = '';
  ngOnInit() {
   this.data.share.subscribe(x =>{
     this.productId = x
     this.getProductByCategory(this.productId);
   });
  
  }

getProductByCategory(productId){
     this._homecategoryService.getProductItemById(productId).subscribe(itemList=>{
      if(itemList.length > 0){
        this.productArrById = itemList;
         console.log(itemList);
      }else{
       alert('No Product added');
      }
    })
} 

 navigateProductUrl(proidd){
  let selectedId = proidd ? proidd : null;
  this.router.navigate(['/product_category',selectedId]);
 }
 
}
