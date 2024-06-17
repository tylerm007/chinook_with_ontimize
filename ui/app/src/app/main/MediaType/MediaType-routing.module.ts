import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaTypeHomeComponent } from './home/MediaType-home.component';
import { MediaTypeNewComponent } from './new/MediaType-new.component';
import { MediaTypeDetailComponent } from './detail/MediaType-detail.component';

const routes: Routes = [
  {path: '', component: MediaTypeHomeComponent},
  { path: 'new', component: MediaTypeNewComponent },
  { path: ':MediaTypeId', component: MediaTypeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MediaType-detail-permissions'
      }
    }
  },{
    path: ':MediaTypeId/Track', loadChildren: () => import('../Track/Track.module').then(m => m.TrackModule),
    data: {
        oPermission: {
            permissionId: 'Track-detail-permissions'
        }
    }
}
];

export const MEDIATYPE_MODULE_DECLARATIONS = [
    MediaTypeHomeComponent,
    MediaTypeNewComponent,
    MediaTypeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaTypeRoutingModule { }