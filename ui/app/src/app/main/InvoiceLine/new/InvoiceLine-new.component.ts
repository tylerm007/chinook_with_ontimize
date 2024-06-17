import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'InvoiceLine-new',
  templateUrl: './InvoiceLine-new.component.html',
  styleUrls: ['./InvoiceLine-new.component.scss']
})
export class InvoiceLineNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}