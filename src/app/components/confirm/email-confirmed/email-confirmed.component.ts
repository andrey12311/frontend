import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyHttpResponse } from 'src/app/model/MyHttpResponse';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-email-confirmed',
  templateUrl: './email-confirmed.component.html',
  styleUrls: ['./email-confirmed.component.css']
})
export class EmailConfirmedComponent implements OnInit {

  token:string;
  message:string;
  constructor(private registerService:RegisterService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.activatedRoute.queryParams.subscribe(
      params =>{
        
        this.token = params['token'];
      }
    )
    this.registerService.confirmEmail(this.token).subscribe(
      (response:MyHttpResponse) =>{
        this.message = response.message;
      },
      (error:HttpErrorResponse)=>{
        this.message = error.error.message;
      }
    )
   }

  ngOnInit(): void {}


  onConfirm(){
    this.router.navigate(['/login']);
  }
}

