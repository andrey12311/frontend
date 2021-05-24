import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8081/user';
  constructor(private loginService:LoginService,private http:HttpClient) { }

  
  logOut(){
    console.log(this.loginService.loggedInUser)
    return this.http.post<User>(`${this.url}/logout/`, this.loginService.loggedInUser,{ withCredentials: true });
    
  }

  getAnunturi(userId:number){
    return this.http.get(`${this.url}/anunturi/${userId}`,{withCredentials:true})
  }
}
