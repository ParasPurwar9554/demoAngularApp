import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { DatabindingexapleComponent } from './databinding/databindingexaple/databindingexaple.component';
import { AboutComponent } from './home/about/about.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"product_category/:product_id",
    component:ProductDetailsComponent
  },
  {
   path:"about",
   component:AboutComponent,
  },
  {
    path:"admin",
    loadChildren:"./admin/admin.module#AdminModule",
    canActivate: [AuthGuard]
  },
  {
    path:"store-admin",
    component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
