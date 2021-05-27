import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddComponent } from './components/add/add.component';
import { AnunturiComponent } from './components/anunturi/anunturi.component';
import { AnuntViewComponent } from './components/anunt-view/anunt-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnunturileMeleComponent } from './components/anunturile-mele/anunturile-mele.component';
import { AnuntulMeuComponent } from './components/anunturile-mele/anuntul-meu/anuntul-meu.component';
import { EmailConfirmedComponent } from './components/confirm/email-confirmed/email-confirmed.component';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { ChangePasswordComponent } from './components/settings/change-password/change-password.component';
import { ChangeEmailComponent } from './components/settings/change-email/change-email.component';
import { NotificationModule } from './notification.module';
import { ModifyAnuntComponent } from './components/anunturile-mele/anuntul-meu/modify-anunt/modify-anunt.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddComponent,
    AnunturiComponent,
    AnuntViewComponent,
    AnunturileMeleComponent,
    AnuntulMeuComponent,
    EmailConfirmedComponent,
    SettingsComponent,
    ChangePasswordComponent,
    ChangeEmailComponent,
    ModifyAnuntComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
