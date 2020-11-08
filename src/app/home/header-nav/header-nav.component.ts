import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm} from '@angular/forms'
import { HomeService } from '../../home-service/home.service';
import { HomecategoryService } from '../../home-service/homecategory.service';
import { environment } from 'src/environments/environment';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.sass']
})
export class HeaderNavComponent implements OnInit {

 successMsg = false;
 signInData:any = {};
 modalRef: BsModalRef;
 config = {
    backdrop: true,
    ignoreBackdropClick: false,
    class:'grey modal-lg'
  };
  constructor(private modalService: BsModalService,private home_service:HomeService,private _homecategoryService:HomecategoryService,private router: Router) { }

  ngOnInit() {
  }
 
openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,this.config);
  }

 signIn(form:NgForm){
    this.signInData = form.value;
    this.home_service.insertSignData(this.signInData).subscribe(
      data => {
        if(data.type == "save"){
          this.modalRef.hide();
          this.successMsg = true;
          this.signInData = {};
          setTimeout(()=>{ 
            this.successMsg = false;
       }, 3000);
        }else{
            alert('Something! went wrong.');
        }
      }
    );  
  }

homeUrl(){
    this.router.navigate([""]);
}
 


}
