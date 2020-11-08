import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatabindingexapleComponent } from './databinding/databindingexaple/databindingexaple.component';
import { LoginComponent } from './home/login/login.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeService } from './home-service/home.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AboutComponent } from './home/about/about.component';
import { AboutService } from './home-service/about.service';
import { CredentialService } from './home-service/credential.service';
import { HomecategoryService } from './home-service/homecategory.service';

import { ProductDataService } from './home-service/product-data.service';

import { AuthGuard } from './auth/auth.guard';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { HeaderNavComponent } from './home/header-nav/header-nav.component';
import { HomeCategoryComponent } from './home/home-category/home-category.component';
import { ProductListComponent } from './home/product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabindingexapleComponent,
    LoginComponent,
    AboutComponent,
    ProductDetailsComponent,
    HeaderNavComponent,
    HomeCategoryComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxPaginationModule,
   
  
  
  ],
  providers: [HttpClientModule,HomeService,AboutService,AuthGuard,CredentialService,HomecategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
