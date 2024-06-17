import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'Playlist-new',
  templateUrl: './Playlist-new.component.html',
  styleUrls: ['./Playlist-new.component.scss']
})
export class PlaylistNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}