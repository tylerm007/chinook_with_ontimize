import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceHomeComponent } from './home/Invoice-home.component';
import { InvoiceNewComponent } from './new/Invoice-new.component';
import { InvoiceDetailComponent } from './detail/Invoice-detail.component';

const routes: Routes = [
  {path: '', component: InvoiceHomeComponent},
  { path: 'new', component: InvoiceNewComponent },
  { path: ':InvoiceId', component: InvoiceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Invoice-detail-permissions'
      }
    }
  },{
    path: ':InvoiceId/InvoiceItem', loadChildren: () => import('../InvoiceItem/InvoiceItem.module').then(m => m.InvoiceItemModule),
    data: {
        oPermission: {
            permissionId: 'InvoiceItem-detail-permissions'
        }
    }
}
];

export const INVOICE_MODULE_DECLARATIONS = [
    InvoiceHomeComponent,
    InvoiceNewComponent,
    InvoiceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }