import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl:NavController) {}

  InputText = "Klicka för att välja planeten!";

  navJorden(){
    this.navCtrl.navigateForward('jorden');
  }

  //Byta sida med en funktion som sägs i html sidan. 
  changeSide(sida){
    this.navCtrl.navigateForward(sida);
  }
}
