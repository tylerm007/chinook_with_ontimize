import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Playlist-card.component.html',
  styleUrls: ['./Playlist-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Playlist-card]': 'true'
  }
})

export class PlaylistCardComponent {


}