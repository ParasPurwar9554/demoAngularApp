import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomecategoryService } from '../../home-service/homecategory.service';
import { ProductDataService } from '../../home-service/product-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  itemDetails:any = [];
  commentArr:any = [];
  reviewcomment:string;
  constructor(private route: ActivatedRoute,private _homecategoryService:HomecategoryService,private _data:ProductDataService) { }

  ngOnInit() {
       this.route.paramMap.subscribe((params:ParamMap)=>{
       let idd = parseInt(params.get('product_id'));
       this.getProDetails(idd);
       this.getReview(idd);
    })
  }

  getProDetails(proId){
   this._data.getProductItmDetals(proId).subscribe(itemList=>{
        this.itemDetails = itemList;
      
    })
  }

  writeReview(comment:any,productId){
    this._data.insertReviewComment(comment,productId).subscribe(commentRes=>{
         this.reviewcomment = '';
         this.getReview(productId);
    })
  }

  getReview(productId){
  this._data.getProductReview(productId).subscribe(commentList=>{
        this.commentArr = commentList;
      
    })
  }

 


}
