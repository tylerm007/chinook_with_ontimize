import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'InvoiceItem-new',
  templateUrl: './InvoiceItem-new.component.html',
  styleUrls: ['./InvoiceItem-new.component.scss']
})
export class InvoiceItemNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}