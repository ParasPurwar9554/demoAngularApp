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
  constructor(private http:HttpClient) {
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-with','XMLHttpRequest');
    //this.options = new RequestOptions({headers:this.headers})
   }
   url = "http://127.0.0.1:8000/api/insert_data";
    
  insertData(city): Observable<any> {
      return this.http.post<any>(environment.api_url+"insert_data",JSON.stringify(city));
    }
  
}
