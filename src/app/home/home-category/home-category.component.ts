import { Component, OnInit,Input,ViewChild  } from '@angular/core';
import { HomecategoryService } from '../../home-service/homecategory.service';
import { HomeComponent } from '../../home/home/home.component';
import { ProductDataService } from '../../home-service/product-data.service';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.sass']
})
export class HomeCategoryComponent implements OnInit {
  productArrById:any = [];
  selectedCatId;
  constructor(private _homecategoryService:HomecategoryService,private data:ProductDataService) { }
  selectedCategory:any = '';
  catetoryData:any = [];
  productId = '';
  ngOnInit() {
     this.homeCategory();
     this.data.share.subscribe(x =>this.productId = x);
  }

  getProductByCategory(id){
   this.data.updateData(id);
   this.selectedCatId = id;
  }

 homeCategory(){
    this._homecategoryService.getCategoryList().subscribe(catdata=>{
      if(catdata.length > 0){
       this.catetoryData = catdata;
       console.log(this.catetoryData);
      }else{
       alert('No Category');
      }
    })
  }



}
