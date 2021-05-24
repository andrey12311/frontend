import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  user:User = this.loginService.loggedInUser;

  ngOnInit(): void {
  }

}
