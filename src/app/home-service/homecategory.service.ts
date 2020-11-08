import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HomecategoryService {
  name: string;

  constructor(private _httpclient: HttpClient) { }
  
  getCategoryList():Observable<any>{
    return this._httpclient.get(environment.api_url+'category/getCategory');
  }

 getProductItemById(catId:any):Observable<any>{
	return this._httpclient.post(environment.api_url+'addProduct/getProductById',{catId:catId});
}


}
