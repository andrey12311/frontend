import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnuntViewService {
  url = "http://localhost:8081";
  constructor(private http:HttpClient) { }

  getAnunt(anuntId:number){
    return this.http.get(`${this.url}/anunturi/${anuntId}`)
  }
}
