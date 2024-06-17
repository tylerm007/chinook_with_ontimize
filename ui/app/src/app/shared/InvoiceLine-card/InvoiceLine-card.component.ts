import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './InvoiceLine-card.component.html',
  styleUrls: ['./InvoiceLine-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.InvoiceLine-card]': 'true'
  }
})

export class InvoiceLineCardComponent {


}