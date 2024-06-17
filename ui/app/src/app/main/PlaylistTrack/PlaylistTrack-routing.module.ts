import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistTrackHomeComponent } from './home/PlaylistTrack-home.component';
import { PlaylistTrackNewComponent } from './new/PlaylistTrack-new.component';
import { PlaylistTrackDetailComponent } from './detail/PlaylistTrack-detail.component';

const routes: Routes = [
  {path: '', component: PlaylistTrackHomeComponent},
  { path: 'new', component: PlaylistTrackNewComponent },
  { path: ':PlaylistId/:TrackId', component: PlaylistTrackDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PlaylistTrack-detail-permissions'
      }
    }
  }
];

export const PLAYLISTTRACK_MODULE_DECLARATIONS = [
    PlaylistTrackHomeComponent,
    PlaylistTrackNewComponent,
    PlaylistTrackDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistTrackRoutingModule { }