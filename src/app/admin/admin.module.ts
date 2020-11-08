import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { LeftSidebarAdminComponent } from './components/left-sidebar-admin/left-sidebar-admin.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CustomerService } from '../admin-services/customer.service';
import { DashboardService } from '../admin-services/dashboard.service';
import { CategoryService } from '../admin-services/category.service';
import { ProductService } from '../admin-services/product.service';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ModalModule } from "ngx-bootstrap";
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'; 
import {NgxPaginationModule} from 'ngx-pagination';
 
@NgModule({
  declarations: [AdminLoginComponent, AdminDashboardComponent, AdminHeaderComponent, LeftSidebarAdminComponent, NewCustomerComponent, AdminLayoutComponent, CategoryComponent, AdminProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
	  NgxDropzoneModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule,

  ],

  providers: [HttpClientModule,CustomerService,DashboardService,CategoryService,ProductService]
})
export class AdminModule { }
