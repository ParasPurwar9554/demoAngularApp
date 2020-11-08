import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 headers :Headers = new Headers();
  constructor(private _httpclient: HttpClient) { 
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-with','XMLHttpRequest');
   
  }


  getProductList():Observable<any>{
    return this._httpclient.get(environment.api_url+'addProduct/getAllProductList');
  }


 deleteProductItem(id:any):Observable<any>{
     return this._httpclient.post(environment.api_url+'addProduct/deleteProductItem',{id:id});
 }

changeProductListStatus(id:any,status:any):Observable<any>{
     return this._httpclient.post(environment.api_url+'addProduct/statusChangeforProduct',{id:id,status:status});
 }



}
