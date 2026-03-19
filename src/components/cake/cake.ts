import { Component } from '@angular/core';

@Component({
  selector: 'app-cake',
  imports: [],
  templateUrl: './cake.html',
  styleUrl: './cake.css',
})
export class Cake {

  isCandleLit = true;
  cardOpen = true;

  blowOut() {
    this.isCandleLit = false;
    console.log('The candle is blown out!');
  }

  openCard() {
    if (!this.isCandleLit) this.cardOpen = !this.cardOpen;
    console.log('the card is ' + (this.cardOpen ? 'open' : 'closed'));
  }
}
