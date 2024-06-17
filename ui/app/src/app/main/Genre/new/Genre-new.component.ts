import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'Genre-new',
  templateUrl: './Genre-new.component.html',
  styleUrls: ['./Genre-new.component.scss']
})
export class GenreNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}