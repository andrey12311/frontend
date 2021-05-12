import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url:string = "http://localhost:8081";
  constructor(private http:HttpClient) { }

   register(user:User){
    return this.http.post<User>(`${this.url}/register`,user);
  }
}
