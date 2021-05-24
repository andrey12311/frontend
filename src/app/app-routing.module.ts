import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AnuntViewComponent } from './components/anunt-view/anunt-view.component';
import { AnunturiComponent } from './components/anunturi/anunturi.component';
import { AnuntulMeuComponent } from './components/anunturile-mele/anuntul-meu/anuntul-meu.component';
import { AnunturileMeleComponent } from './components/anunturile-mele/anunturile-mele.component';
import { EmailConfirmedComponent } from './components/confirm/email-confirmed/email-confirmed.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangeEmailComponent } from './components/settings/change-email/change-email.component';
import { ChangePasswordComponent } from './components/settings/change-password/change-password.component';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'anunturi',component:AnunturiComponent},
  {path:'anunturi/:id',component:AnuntViewComponent},
  {path:'add',component:AddComponent},
  {path:'setari/schimba-parola',component:ChangePasswordComponent},
  {path:'setari/schimba-mail',component:ChangeEmailComponent},
  {path:'setari',component:SettingsComponent},
  {path:'anunturilemele',component:AnunturileMeleComponent,canActivate:[AuthenticationGuard]},
  {path:'anunturilemele/:id',component:AnuntulMeuComponent},
  {path:'confirmEmail',component:EmailConfirmedComponent},
  {path:'',redirectTo:'/anunturi',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
