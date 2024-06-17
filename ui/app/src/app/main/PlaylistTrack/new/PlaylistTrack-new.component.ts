import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'PlaylistTrack-new',
  templateUrl: './PlaylistTrack-new.component.html',
  styleUrls: ['./PlaylistTrack-new.component.scss']
})
export class PlaylistTrackNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}