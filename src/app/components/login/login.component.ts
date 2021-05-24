import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/model/User';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService,private router:Router,private appComponent:AppComponent
    ,private notifierService:NotifierService) { }

  ngOnInit(): void {
  }


  onLogin(user: User): void {
   
    this.loginService.login(user).subscribe(
      (user: HttpResponse<User>) => {
        this.loginService.loggedInUser = user.body;
        this.appComponent.authenticated = true;
        this.loginService.authenticated = true;
        this.router.navigate(['/anunturi']);
        console.log(user);
      },
      (error: HttpErrorResponse) => {
        this.notifierService.notify('error',error.error.message);
        console.log(error.error.message);
      }
    );
  }

}
