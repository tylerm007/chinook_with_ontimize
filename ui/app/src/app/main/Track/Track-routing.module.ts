import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackHomeComponent } from './home/Track-home.component';
import { TrackNewComponent } from './new/Track-new.component';
import { TrackDetailComponent } from './detail/Track-detail.component';

const routes: Routes = [
  {path: '', component: TrackHomeComponent},
  { path: 'new', component: TrackNewComponent },
  { path: ':TrackId', component: TrackDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Track-detail-permissions'
      }
    }
  },{
    path: ':TrackId/InvoiceItem', loadChildren: () => import('../InvoiceItem/InvoiceItem.module').then(m => m.InvoiceItemModule),
    data: {
        oPermission: {
            permissionId: 'InvoiceItem-detail-permissions'
        }
    }
},{
    path: ':TrackId/PlaylistTrack', loadChildren: () => import('../PlaylistTrack/PlaylistTrack.module').then(m => m.PlaylistTrackModule),
    data: {
        oPermission: {
            permissionId: 'PlaylistTrack-detail-permissions'
        }
    }
}
];

export const TRACK_MODULE_DECLARATIONS = [
    TrackHomeComponent,
    TrackNewComponent,
    TrackDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackRoutingModule { }