import { Injectable } from '@angular/core';
import { Router,CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
   check = false;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem("username") != ''  || localStorage.getItem("username") != 'undefined'){
        return true;
      }else{
        this.router.navigateByUrl("/store-admin");
        return false;
      }
  
  }
  
}
