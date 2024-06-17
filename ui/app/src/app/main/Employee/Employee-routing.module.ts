import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './home/Employee-home.component';
import { EmployeeNewComponent } from './new/Employee-new.component';
import { EmployeeDetailComponent } from './detail/Employee-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeHomeComponent},
  { path: 'new', component: EmployeeNewComponent },
  { path: ':EmployeeId', component: EmployeeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Employee-detail-permissions'
      }
    }
  },{
    path: ':SupportRepId/Customer', loadChildren: () => import('../Customer/Customer.module').then(m => m.CustomerModule),
    data: {
        oPermission: {
            permissionId: 'Customer-detail-permissions'
        }
    }
},{
    path: ':ReportsTo/Employee', loadChildren: () => import('../Employee/Employee.module').then(m => m.EmployeeModule),
    data: {
        oPermission: {
            permissionId: 'Employee-detail-permissions'
        }
    }
}
];

export const EMPLOYEE_MODULE_DECLARATIONS = [
    EmployeeHomeComponent,
    EmployeeNewComponent,
    EmployeeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }