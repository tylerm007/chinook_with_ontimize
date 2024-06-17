import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'Artist-new',
  templateUrl: './Artist-new.component.html',
  styleUrls: ['./Artist-new.component.scss']
})
export class ArtistNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}