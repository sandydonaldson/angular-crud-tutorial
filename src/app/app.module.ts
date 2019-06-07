import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    NgbModule, 
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, ListEmployeesComponent, CreateEmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
