import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of,BehaviorSubject  } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
private content = new BehaviorSubject<any>(1);
public share = this.content.asObservable();
  constructor(private _httpclient: HttpClient) { }
    
   updateData(text){
    this.content.next(text);
   }

  getProductItmDetals(prod_id):Observable<any>{
    return this._httpclient.post(environment.api_url+'addProduct/proItemDetail',{prod_id:prod_id});
  }

  insertReviewComment(comment,prod_id):Observable<any>{
     return this._httpclient.post(environment.api_url+'reviewComment/saveCommentReview',{prod_id:prod_id,comment:comment});
  }

  getProductReview(product_id):Observable<any>{
     return this._httpclient.post(environment.api_url+'reviewComment/getCommentReview',{product_id:product_id});
  }

}
