import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AnuntViewComponent } from './components/anunt-view/anunt-view.component';
import { AnunturiComponent } from './components/anunturi/anunturi.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'anunturi',component:AnunturiComponent},
  {path:'anunturi/:id',component:AnuntViewComponent},
  {path:'add',component:AddComponent},
  {path:'',redirectTo:'/anunturi',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
