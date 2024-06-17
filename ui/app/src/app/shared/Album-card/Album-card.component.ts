import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Album-card.component.html',
  styleUrls: ['./Album-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Album-card]': 'true'
  }
})

export class AlbumCardComponent {


}