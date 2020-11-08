import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  headers :Headers = new Headers();

  constructor(private _httpclient:HttpClient) {
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-with','XMLHttpRequest');
   }
   url = "http://127.0.0.1:8000/api/insert_Sign_Data";
 insertSignData(signInData:any): Observable<any> {
     return this._httpclient.post(environment.api_url+"insert_Sign_Data",JSON.stringify(signInData));
  }
}
