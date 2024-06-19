import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OTableButtonComponent, OTableComponent, OTableExportData3X } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import {OReportModule,OReportStoreService} from 'ontimize-web-ngx-report'

@Component({
  selector: 'Album-home',
  templateUrl: './Album-home.component.html',
  styleUrls: ['./Album-home.component.scss']
})
export class AlbumHomeComponent implements AfterViewInit {

  @ViewChild('table', { static: true }) table: OTableComponent;

  @ViewChild('button')
  protected button: OTableButtonComponent;

  ngAfterViewInit() {
    //this.button.onClick.subscribe(event => {
   //   this.reportStoreService.openFillReport("94fa9d2a-e9cc-458a-a680-9bc576e14a38");
   // });
  }

  //constructor(private reportStoreService: OReportStoreService) { }
}