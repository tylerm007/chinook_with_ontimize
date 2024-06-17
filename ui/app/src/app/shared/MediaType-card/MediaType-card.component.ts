import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MediaType-card.component.html',
  styleUrls: ['./MediaType-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MediaType-card]': 'true'
  }
})

export class MediaTypeCardComponent {


}