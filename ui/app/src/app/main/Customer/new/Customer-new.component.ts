import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'Customer-new',
  templateUrl: './Customer-new.component.html',
  styleUrls: ['./Customer-new.component.scss']
})
export class CustomerNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}