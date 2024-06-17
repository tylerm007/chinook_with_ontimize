import { MenuRootItem } from 'ontimize-web-ngx';

import { AlbumCardComponent } from './Album-card/Album-card.component';

import { ArtistCardComponent } from './Artist-card/Artist-card.component';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { GenreCardComponent } from './Genre-card/Genre-card.component';

import { InvoiceCardComponent } from './Invoice-card/Invoice-card.component';

import { InvoiceLineCardComponent } from './InvoiceLine-card/InvoiceLine-card.component';

import { MediaTypeCardComponent } from './MediaType-card/MediaType-card.component';

import { PlaylistCardComponent } from './Playlist-card/Playlist-card.component';

import { PlaylistTrackCardComponent } from './PlaylistTrack-card/PlaylistTrack-card.component';

import { TrackCardComponent } from './Track-card/Track-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    { id: 'settings', name: 'Settings', icon: 'home', route: '/main/settings'},
    { id: 'data', name: 'DATA', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Album', name: 'ALBUM', icon: 'description', route: '/main/Album' }
    
        ,{ id: 'Artist', name: 'ARTIST', icon: 'description', route: '/main/Artist' }
    
        ,{ id: 'Customer', name: 'CUSTOMER', icon: 'description', route: '/main/Customer' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'description', route: '/main/Employee' }
    
        ,{ id: 'Genre', name: 'GENRE', icon: 'description', route: '/main/Genre' }
    
        ,{ id: 'Invoice', name: 'INVOICE', icon: 'description', route: '/main/Invoice' }
    
        ,{ id: 'InvoiceLine', name: 'INVOICELINE', icon: 'description', route: '/main/InvoiceLine' }
    
        ,{ id: 'MediaType', name: 'MEDIATYPE', icon: 'description', route: '/main/MediaType' }
    
        ,{ id: 'Playlist', name: 'PLAYLIST', icon: 'description', route: '/main/Playlist' }
    
        ,{ id: 'PlaylistTrack', name: 'PLAYLISTTRACK', icon: 'description', route: '/main/PlaylistTrack' }
    
        ,{ id: 'Track', name: 'TRACK', icon: 'description', route: '/main/Track' }
    
    ] 
    }
    ,{ id: 'about', name: 'About', icon: 'home', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AlbumCardComponent

    ,ArtistCardComponent

    ,CustomerCardComponent

    ,EmployeeCardComponent

    ,GenreCardComponent

    ,InvoiceCardComponent

    ,InvoiceLineCardComponent

    ,MediaTypeCardComponent

    ,PlaylistCardComponent

    ,PlaylistTrackCardComponent

    ,TrackCardComponent

];