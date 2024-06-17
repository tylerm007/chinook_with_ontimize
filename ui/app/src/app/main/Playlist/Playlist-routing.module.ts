import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistHomeComponent } from './home/Playlist-home.component';
import { PlaylistNewComponent } from './new/Playlist-new.component';
import { PlaylistDetailComponent } from './detail/Playlist-detail.component';

const routes: Routes = [
  {path: '', component: PlaylistHomeComponent},
  { path: 'new', component: PlaylistNewComponent },
  { path: ':PlaylistId', component: PlaylistDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Playlist-detail-permissions'
      }
    }
  },{
    path: ':PlaylistId/PlaylistTrack', loadChildren: () => import('../PlaylistTrack/PlaylistTrack.module').then(m => m.PlaylistTrackModule),
    data: {
        oPermission: {
            permissionId: 'PlaylistTrack-detail-permissions'
        }
    }
}
];

export const PLAYLIST_MODULE_DECLARATIONS = [
    PlaylistHomeComponent,
    PlaylistNewComponent,
    PlaylistDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }