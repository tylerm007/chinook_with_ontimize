import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'Invoice-new',
  templateUrl: './Invoice-new.component.html',
  styleUrls: ['./Invoice-new.component.scss']
})
export class InvoiceNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}