import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYLIST_MODULE_DECLARATIONS, PlaylistRoutingModule} from  './Playlist-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlaylistRoutingModule
  ],
  declarations: PLAYLIST_MODULE_DECLARATIONS,
  exports: PLAYLIST_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlaylistModule { }