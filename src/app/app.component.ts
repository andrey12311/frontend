import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login/login.service';
import { UserService } from './services/user-service/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  
  ngOnInit(){
    console.log('app component apelat');
    
  }
  constructor(private userService:UserService,private router:Router,private loginService:LoginService){}
  authenticated:boolean = this.loginService.authenticated;
  
  onLogOut(){
    this.userService.logOut().subscribe(
      (user) =>{
        console.log(user);
        this.loginService.authenticated = false;
        this.authenticated = false;
        this.router.navigate(['/login'])
      },
      (error:HttpErrorResponse) => {
        console.log(error.error.message);
        }
    )
  }
  onAddClick(){
    if(this.authenticated){
      this.router.navigate(['/add']);
    }else{
      this.router.navigate(['/login'])
    }
  }
}
