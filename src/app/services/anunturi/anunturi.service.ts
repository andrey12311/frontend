import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anunt } from 'src/app/model/Anunt';

@Injectable({
  providedIn: 'root'
})
export class AnunturiService {
  url = 'http://localhost:8081/anunturi-api';
  constructor(private http:HttpClient) { }

  getAnunturi():Observable<Anunt[]>{
    return this.http.get<Anunt[]>(`${this.url}/anunturi`)
  }

  getAnunt(anuntId:number){
    return this.http.get(`${this.url}/anunturi/${anuntId}`)
  }
  
  add(formData:FormData){
    return this.http.post<Anunt>(`${this.url}/add`,formData,{withCredentials:true});
  }

  getPoza(anuntId:string,email:string){
    return this.http.get(`${this.url}/image/${email}/${anuntId}/poza.jpg`)
  }
  
  deleteAnunt(id:number){
    return this.http.delete(`${this.url}/delete/${id}`,{withCredentials:true});
  }
}
