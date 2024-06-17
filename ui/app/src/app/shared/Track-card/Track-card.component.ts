import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Track-card.component.html',
  styleUrls: ['./Track-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Track-card]': 'true'
  }
})

export class TrackCardComponent {


}