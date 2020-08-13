import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/list/employee.component';
import { LayoutComponent } from './layout/layout.component';
import { BaseService } from './shared/services/base.service';
import { GenericService } from './shared/services/generic.service';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/user/list/user-list.component';
import { UserFormComponent } from './components/user/form/user-form.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    EmployeeComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatToolbarModule,
    SharedModule
  ],
  providers: [BaseService, GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
