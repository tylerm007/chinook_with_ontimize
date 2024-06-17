import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ALBUM_MODULE_DECLARATIONS, AlbumRoutingModule} from  './Album-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AlbumRoutingModule
  ],
  declarations: ALBUM_MODULE_DECLARATIONS,
  exports: ALBUM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlbumModule { }