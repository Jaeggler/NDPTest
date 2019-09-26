import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { UserListComponent } from './userlist/userlist.component';
import { AppRoutingModule } from './app-routing.module';
import { UserAddComponent } from './useradd/useradd.component';
import { FrontComponent } from './front/front.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
