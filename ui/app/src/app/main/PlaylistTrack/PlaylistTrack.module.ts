import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYLISTTRACK_MODULE_DECLARATIONS, PlaylistTrackRoutingModule} from  './PlaylistTrack-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlaylistTrackRoutingModule
  ],
  declarations: PLAYLISTTRACK_MODULE_DECLARATIONS,
  exports: PLAYLISTTRACK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlaylistTrackModule { }