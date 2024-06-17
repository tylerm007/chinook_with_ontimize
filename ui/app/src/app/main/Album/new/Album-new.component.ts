import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'Album-new',
  templateUrl: './Album-new.component.html',
  styleUrls: ['./Album-new.component.scss']
})
export class AlbumNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}