import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
   headers :Headers = new Headers();
   options:any;
  constructor(private _httpclient:HttpClient) {
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-with','XMLHttpRequest');
    //this.options = new RequestOptions({headers:this.headers})
   }
 
  
  totalRecord():Observable<any>{
     return this._httpclient.get(environment.api_url+'dashboard/todalUserProduct');
 }


}
