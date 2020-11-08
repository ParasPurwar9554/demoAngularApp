import { Component, OnInit,TemplateRef,Input,ViewChild } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TabsetConfig } from 'ngx-bootstrap/tabs';
import { NgForm} from '@angular/forms'
import {NgbPaginationModule, NgbAlertModule,NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../../home-service/home.service';
import { HomecategoryService } from '../../home-service/homecategory.service';

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'pills' });
}
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
})

export class HomeComponent implements OnInit {
  successMsg = false;
  signInData:any = {};
  catetoryData:any = [];
  productArrById:any = [];
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
    class:'grey modal-lg'
  };

  constructor(private _homecategoryService:HomecategoryService,private modalService: BsModalService, private home_service:HomeService,private router: Router,) {}

  ngOnInit() {
   // this.homeCategory();
    //this.getProductByCategory(15);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,this.config);
  }

 /*getProductByCategory(catId){
     this._homecategoryService.getProductItemById(catId).subscribe(itemList=>{
      if(itemList.length > 0){
        this.productArrById = itemList;
         console.log(itemList);
      }else{
       alert('No Product added');
      }
    })
}*/
 




}
