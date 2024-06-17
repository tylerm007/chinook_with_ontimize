import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreHomeComponent } from './home/Genre-home.component';
import { GenreNewComponent } from './new/Genre-new.component';
import { GenreDetailComponent } from './detail/Genre-detail.component';

const routes: Routes = [
  {path: '', component: GenreHomeComponent},
  { path: 'new', component: GenreNewComponent },
  { path: ':GenreId', component: GenreDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Genre-detail-permissions'
      }
    }
  },{
    path: ':GenreId/Track', loadChildren: () => import('../Track/Track.module').then(m => m.TrackModule),
    data: {
        oPermission: {
            permissionId: 'Track-detail-permissions'
        }
    }
}
];

export const GENRE_MODULE_DECLARATIONS = [
    GenreHomeComponent,
    GenreNewComponent,
    GenreDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }