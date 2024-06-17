import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MEDIATYPE_MODULE_DECLARATIONS, MediaTypeRoutingModule} from  './MediaType-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MediaTypeRoutingModule
  ],
  declarations: MEDIATYPE_MODULE_DECLARATIONS,
  exports: MEDIATYPE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MediaTypeModule { }