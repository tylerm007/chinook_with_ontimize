import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PlaylistTrack-card.component.html',
  styleUrls: ['./PlaylistTrack-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PlaylistTrack-card]': 'true'
  }
})

export class PlaylistTrackCardComponent {


}