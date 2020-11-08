import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CategoryComponent } from './components/category/category.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
const  routesChild:  Routes  = [
  {
  path:  '',
  component:  AdminLayoutComponent,
  children: [
  {
  path:  'dashboard',
  component:  AdminDashboardComponent
  },
  {
  path:  'customer',
  component:  NewCustomerComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path:'products',
    component:AdminProductsComponent
  }
  ]
  }
  ];

/*const routesChild: Routes = [
  { path:"", component:AdminLoginComponent },
  {path:"dashboard",component:AdminLayoutComponent },
  {path:"customer",component:NewCustomerComponent }
];*/


@NgModule({
  imports: [RouterModule.forChild(routesChild)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
