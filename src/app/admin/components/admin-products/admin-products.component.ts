import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/admin-services/category.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProductService } from 'src/app/admin-services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.sass'],
  providers: [ProductService]
})
export class AdminProductsComponent implements OnInit {
 
  productListing:any = [];  
  updateProductList:any = {}; 
  p: number = 1;
	files: File[] = [];
  objectKeys = Object.keys;
  productArr:any = {};
  
  selectedFile: File = null;
  imageErrorStr: string = '<strong>One image must be selected</strong>';
  productAddedMsg: string = '<strong>Product has been added successfully.</strong>';
  productUpdatedMsg: string = '<strong>Product has been updated successfully.</strong>';
  image_error = false;
  success_msg = false;
  product_update_msg = false;

	onSelect(event) {
    this.files.push(...event.addedFiles);
    this.selectedFile = <File>this.files[0];
      console.log(this.selectedFile);
     
	}

	onRemove(event) {
		//console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  categoryArr = [];
  constructor(private _categoryService:CategoryService,private http:HttpClient,private _productService: ProductService,private router: Router) {
  
  var userName = localStorage.getItem("username");
  if(userName ==''){
    this.router.navigateByUrl("/store-admin");
  }

   }
  
  ngOnInit() {
    this.getCategoryList()
    this.getProductListing();

  }
 

  getCategoryList(){
    this._categoryService.getCatList().subscribe(catdata=>{
      if(catdata.length > 0){
          this.categoryArr = catdata;
      }else{
         alert('No Category');
      }
    })
  }

updateProductListing(id){
  var index = this.productListing.map(function(e) {
       return e.id;
    }).indexOf(id);
     this.productArr = this.productListing[index];
     this.productArr.productId = this.productArr.id;
     this.productArr.product_category =this.productArr.category_id;
     this.productArr.uploadedImage  = this.productArr.product_image;
}

  addProductList(){
        const fd = new FormData();
        if(this.files.length == 0 && this.productArr.productId =='')
        {
            this.image_error = true;
           setTimeout(()=>{ 
              this.image_error = false;
         }, 3000);
        }
        else if(this.files.length > 1)
        {
           this.image_error = true;
           setTimeout(()=>{ 
             this.image_error = false;
         }, 3000);
        }
        else {
         if(this.files.length != 0){
               fd.append('image',this.selectedFile,this.selectedFile.name);
          }
            fd.append('productId',this.productArr.productId);
          
            fd.append('productname',this.productArr.productname);
            fd.append('product_price',this.productArr.product_price);
            fd.append('product_category',this.productArr.product_category);
            fd.append('product_discription',this.productArr.product_discription);

         this.http.post(environment.api_url+'addProduct/filesUpload',fd).subscribe(res=>{
         
           if(this.productArr.productId !=''){
             this.product_update_msg = true;
           }else{
             this.success_msg = true;
           }
           
           this.getProductListing();
           setTimeout(()=>{ 
              this.success_msg  = false;
         }, 3000);
           this.productArr = {};
           this.files = [];
           
       });

      }
  
  }

getProductListing(){
   this._productService.getProductList().subscribe(productLi=>{
      this.productListing = productLi;
      console.log(this.productListing);
   });
}




deleteProduct(productId){
  this._productService.deleteProductItem(productId).subscribe(productDelete=>{
      console.log(productDelete);
      this.getProductListing();
   });
}

changeProductStatus(productId,status){
  this._productService.changeProductListStatus(productId,status).subscribe(productstatus=>{
      console.log(productstatus);
      this.getProductListing();
   });
}


resetArr(){
  this.productArr = {};
  this.productArr.productId ='';
}

}
