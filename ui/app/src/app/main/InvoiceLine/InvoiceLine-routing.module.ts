import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceLineHomeComponent } from './home/InvoiceLine-home.component';
import { InvoiceLineNewComponent } from './new/InvoiceLine-new.component';
import { InvoiceLineDetailComponent } from './detail/InvoiceLine-detail.component';

const routes: Routes = [
  {path: '', component: InvoiceLineHomeComponent},
  { path: 'new', component: InvoiceLineNewComponent },
  { path: ':InvoiceLineId', component: InvoiceLineDetailComponent,
    data: {
      oPermission: {
        permissionId: 'InvoiceLine-detail-permissions'
      }
    }
  }
];

export const INVOICELINE_MODULE_DECLARATIONS = [
    InvoiceLineHomeComponent,
    InvoiceLineNewComponent,
    InvoiceLineDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceLineRoutingModule { }