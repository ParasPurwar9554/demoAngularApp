import { Component, OnInit } from '@angular/core';
import {HttpHeaders,HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DashboardService } from 'src/app/admin-services/dashboard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass'],
  providers:[DashboardService]
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _dashboard:DashboardService,private router: Router) { 
  var userName = localStorage.getItem("username");
  if(userName ==''){
    this.router.navigateByUrl("/store-admin");
  }
   
  }
  
  
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
 
 totalRecordNum:any = {};
  ngOnInit() {
     this._dashboard.totalRecord().subscribe(numberto=>{
      this.totalRecordNum = numberto;
     
   })
  }
  
}
