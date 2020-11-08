import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor(private router: Router) { }

   checkUsernamePassword(username:any,password:any){
    if(username == "admin" && password == "admin"){
         localStorage.setItem("username",username);
         return true;
      }else{
         return false;
    }
  }
  
}
