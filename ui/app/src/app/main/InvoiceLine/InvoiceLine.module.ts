import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INVOICELINE_MODULE_DECLARATIONS, InvoiceLineRoutingModule} from  './InvoiceLine-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InvoiceLineRoutingModule
  ],
  declarations: INVOICELINE_MODULE_DECLARATIONS,
  exports: INVOICELINE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvoiceLineModule { }