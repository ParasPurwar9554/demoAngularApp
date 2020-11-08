import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  headers :Headers = new Headers();
  constructor(private _httpclient: HttpClient) { 
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-with','XMLHttpRequest');
  }
  url = "http://127.0.0.1:8000/api/insert_Category_Data";
  insertCategory(catname:any):Observable<any>{
     return this._httpclient.post(environment.api_url+'insert_Category_Data',catname);
  }

  getCatList():Observable<any>{
    return this._httpclient.get(environment.api_url+'category/getCategory');
  }

 deleteCategory(id:any):Observable<any>{
  return this._httpclient.post(environment.api_url+'category/deleteCategory',{id:id});
 }

changeCategory(id:any,status:any):Observable<any>{
     return this._httpclient.post(environment.api_url+'category/statusChangeforCategory',{id:id,status:status});
 }


}
