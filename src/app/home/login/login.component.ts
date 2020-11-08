import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { CredentialService } from 'src/app/home-service/credential.service';
import { CredentialService } from '../../home-service/credential.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
 
  constructor(private router: Router,private _credentialService:CredentialService) { }

  ngOnInit() {
  }
  loginDetails = false;
  userLogin(e){
     e.preventDefault();
     const target = e.target;
     const username = target.querySelector('#usernameId').value;
     const password = target.querySelector('#passwordId').value;
      var output =  this._credentialService.checkUsernamePassword(username,password);
      if(output == true){
          this.router.navigateByUrl("admin/dashboard");
      }else{
          this.loginDetails = true;
      }
    }

}
