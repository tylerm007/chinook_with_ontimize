import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumHomeComponent } from './home/Album-home.component';
import { AlbumNewComponent } from './new/Album-new.component';
import { AlbumDetailComponent } from './detail/Album-detail.component';

const routes: Routes = [
  {path: '', component: AlbumHomeComponent},
  { path: 'new', component: AlbumNewComponent },
  { path: ':AlbumId', component: AlbumDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Album-detail-permissions'
      }
    }
  },{
    path: ':AlbumId/Track', loadChildren: () => import('../Track/Track.module').then(m => m.TrackModule),
    data: {
        oPermission: {
            permissionId: 'Track-detail-permissions'
        }
    }
}
];

export const ALBUM_MODULE_DECLARATIONS = [
    AlbumHomeComponent,
    AlbumNewComponent,
    AlbumDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }