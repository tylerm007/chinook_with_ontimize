import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'MediaType-new',
  templateUrl: './MediaType-new.component.html',
  styleUrls: ['./MediaType-new.component.scss']
})
export class MediaTypeNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}