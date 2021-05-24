import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = "http://localhost:8081";
  loggedInUser:User;
  authenticated:boolean = false;
  constructor(private http: HttpClient) { }

  login(user: User):Observable<HttpResponse<User>>{
    return this.http.post<User>(`${this.url}/login-api/login`, user,{observe:'response', withCredentials: true });
  }
}
