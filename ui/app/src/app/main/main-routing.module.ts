import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Album', loadChildren: () => import('./Album/Album.module').then(m => m.AlbumModule) },
    
        { path: 'Artist', loadChildren: () => import('./Artist/Artist.module').then(m => m.ArtistModule) },
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'Genre', loadChildren: () => import('./Genre/Genre.module').then(m => m.GenreModule) },
    
        { path: 'Invoice', loadChildren: () => import('./Invoice/Invoice.module').then(m => m.InvoiceModule) },
    
        { path: 'InvoiceItem', loadChildren: () => import('./InvoiceItem/InvoiceItem.module').then(m => m.InvoiceItemModule) },
    
        { path: 'MediaType', loadChildren: () => import('./MediaType/MediaType.module').then(m => m.MediaTypeModule) },
    
        { path: 'Playlist', loadChildren: () => import('./Playlist/Playlist.module').then(m => m.PlaylistModule) },
    
        { path: 'PlaylistTrack', loadChildren: () => import('./PlaylistTrack/PlaylistTrack.module').then(m => m.PlaylistTrackModule) },
    
        { path: 'Track', loadChildren: () => import('./Track/Track.module').then(m => m.TrackModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }