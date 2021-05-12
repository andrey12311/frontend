import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/User';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscriptions:Subscription[] = [];

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  
  onLogin(user:User):void{
   
    console.log(user);
    this.subscriptions.push(
      this.loginService.login(user).subscribe(
        (user:User)=>{
          console.log(user);
          this.loginService.loggedInUser = user;
      },
        (errorResponse:HttpErrorResponse)=>{
          console.log(errorResponse);
         
        
          }
      )
    );    
  }

}
