import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Genre-card.component.html',
  styleUrls: ['./Genre-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Genre-card]': 'true'
  }
})

export class GenreCardComponent {


}