import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EmployeeComponent } from './components/employee/list/employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/user/list/user-list.component';
import { UserFormComponent } from './components/user/form/user-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },

      {
        path: 'users',
        children: [
          { path: '', component: UserListComponent },
          { path: 'create', component: UserFormComponent, data: { act: 'create' } },
          { path: 'update/:id', component: UserFormComponent, data: { act: 'update' } },
          { path: 'view/:id', component: UserFormComponent, data: { act: 'view' } }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
