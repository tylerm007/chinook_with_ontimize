import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'Track-new',
  templateUrl: './Track-new.component.html',
  styleUrls: ['./Track-new.component.scss']
})
export class TrackNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}