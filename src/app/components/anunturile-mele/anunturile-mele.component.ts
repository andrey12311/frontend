import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Anunt } from 'src/app/model/Anunt';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-anunturile-mele',
  templateUrl: './anunturile-mele.component.html',
  styleUrls: ['./anunturile-mele.component.css']
})
export class AnunturileMeleComponent implements OnInit {
  anunturi: Anunt[];

  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getAnunturi();
  }

  getAnunturi() {
    this.userService.getAnunturi(this.loginService.loggedInUser.id).subscribe(
      (anunturi: Anunt[]) => {
        this.anunturi = anunturi;
        console.log(anunturi);
      },
      (error: HttpErrorResponse) => {
        console.log(error.error.message);
      }
    )


  }
}
