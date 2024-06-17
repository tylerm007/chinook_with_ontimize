import { Component, Injector } from '@angular/core';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'Employee-new',
  templateUrl: './Employee-new.component.html',
  styleUrls: ['./Employee-new.component.scss']
})
export class EmployeeNewComponent {
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}