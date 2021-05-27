import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router,private notifier:NotifierService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.authenticated == false){
        this.router.navigate(['/anunturi'])
        this.notifier.notify('warning','Trebuie sa fiti autentificat pentru accesa pagina.')
      } 
    return this.loginService.authenticated;
  }
  
}
