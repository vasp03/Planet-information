import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jorden',
  templateUrl: './jorden.page.html',
  styleUrls: ['./jorden.page.scss'],
})
export class JordenPage implements OnInit {
  PlanetFakta: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.PlanetFakta = firestore.collection("PlanetFakta").valueChanges();
  }

  ngOnInit() {
  }
}
