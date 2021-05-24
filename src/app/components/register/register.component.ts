import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { User } from 'src/app/model/User';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService,private router:Router,private notifier:NotifierService) { }

  isLoading:boolean = false;
  @ViewChild('createButton')createAccountButton:ElementRef 
  ngOnInit(): void {
  }


    onRegister(user: User): void {
      
    this.isLoading = true;
      this.registerService.register(user).subscribe(
        (response: User) => {
          this.isLoading = false;
          this.router.navigate(['/login']);
          this.notifier.notify('success','Contul a fost creat, un mail de confirmare a fost trimis pe adresa dumneavoastra.');
        },
        (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.notifier.notify('warning',error.error.message);
        }
      )
    
  }
}
