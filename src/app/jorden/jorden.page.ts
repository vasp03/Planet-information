import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-jorden',
  templateUrl: './jorden.page.html',
  styleUrls: ['./jorden.page.scss'],
})
export class JordenPage implements OnInit {

  items: any ;

  constructor(public afd : AngularFireDatabase) {
    this.getSomeText();
  }

  ngOnInit() {
  }

  getSomeText() {
    this.afd.list('PlanetFakta/Jorden').valueChanges().subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )
  }
}
