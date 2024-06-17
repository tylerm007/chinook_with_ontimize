import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistHomeComponent } from './home/Artist-home.component';
import { ArtistNewComponent } from './new/Artist-new.component';
import { ArtistDetailComponent } from './detail/Artist-detail.component';

const routes: Routes = [
  {path: '', component: ArtistHomeComponent},
  { path: 'new', component: ArtistNewComponent },
  { path: ':ArtistId', component: ArtistDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Artist-detail-permissions'
      }
    }
  },{
    path: ':ArtistId/Album', loadChildren: () => import('../Album/Album.module').then(m => m.AlbumModule),
    data: {
        oPermission: {
            permissionId: 'Album-detail-permissions'
        }
    }
}
];

export const ARTIST_MODULE_DECLARATIONS = [
    ArtistHomeComponent,
    ArtistNewComponent,
    ArtistDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }