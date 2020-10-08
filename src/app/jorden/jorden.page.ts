import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jorden',
  templateUrl: './jorden.page.html',
  styleUrls: ['./jorden.page.scss'],
})
export class JordenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
