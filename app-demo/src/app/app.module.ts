import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EventDemoComponent } from './event-demo/event-demo.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';

let myRoutes : Routes = [
  {path: "", component : LoginFormComponent},
  {path : "register", component : UserFormComponent },
  {path : "login", component : LoginFormComponent},
  {path : "success/:id", component : SuccessComponent}
]

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeeListComponent, EventDemoComponent, UserFormComponent, LoginFormComponent, SuccessComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
