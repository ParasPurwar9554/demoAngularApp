import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from 'src/app/admin-services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.sass']
})
export class NewCustomerComponent implements OnInit {
  public customerArr:any = [];
  constructor( private CustomerService: CustomerService,private router: Router) { 
   var userName = localStorage.getItem("username");
      if(userName ==''){
      this.router.navigateByUrl("/store-admin");
    }

  }
  ngOnInit() {
    return this.CustomerService.getCustomer().subscribe(res=>{
      this.customerArr = res;
    });   
  }
}
