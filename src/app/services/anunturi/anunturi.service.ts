import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anunt } from 'src/app/model/Anunt';

@Injectable({
  providedIn: 'root'
})
export class AnunturiService {
  url = 'http://localhost:8081';
  constructor(private http:HttpClient) { }

  getAnunturi(){
    return this.http.get<Anunt[]>(`${this.url}/anunturi`)
  }
}
