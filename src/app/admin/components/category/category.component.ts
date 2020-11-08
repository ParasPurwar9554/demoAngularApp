import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CategoryService } from 'src/app/admin-services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  public modalRef: BsModalRef;
  category:any = {};
  category_error = false;
  category_success = false;
  category_deleted = false;
  constructor(private _categoryService:CategoryService,private modalService: BsModalService,private router: Router) {
    var userName = localStorage.getItem("username");
      if(userName ==''){
      this.router.navigateByUrl("/store-admin");
    }

  }
  ngOnInit() {
    this.getCategoryList();
  }
  openModalCategory(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  addCategory(category:any){
    if(typeof(category.catname) !='undefined' && category.catname != ''){
    this._categoryService.insertCategory(JSON.stringify(category)).subscribe(data=>{
      this.modalRef.hide();
      this.category_success = true;
      this.category = {};
      this.getCategoryList();
      setTimeout(()=>{ 
        this.category_success = false;
        }, 3000);
       });
         }else{
            this.category_error = true;
            setTimeout(()=>{ 
            this.category_error = false;
         }, 3000);
     }    
 }

 categorr_arr = []; 
 getCategoryList(){
   this._categoryService.getCatList().subscribe(catdata=>{
     if(catdata.length > 0){
      this.categorr_arr = catdata;
     }else{
      alert('No Category');
     }
   })
 }

 deleteCategory(idd:any){
  this._categoryService.deleteCategory(idd).subscribe(deletedata=>{
    if(deletedata.type == "deleteCat"){
      this.getCategoryList();
      this.category_deleted = true;
      setTimeout(()=>{ 
        this.category_deleted = false;
      }, 3000);
    }else{
     alert('Category not deleted!');
    }
  })
}

categoryStatus(id:any,status:any){
  this._categoryService.changeCategory(id,status).subscribe(statusdata=>{
    if(statusdata.type == "statuschange"){
      this.getCategoryList();
    }else{
     alert('Category status not change!');
    }
  })
}
  
  


}
