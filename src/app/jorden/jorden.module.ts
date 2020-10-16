import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JordenPageRoutingModule } from './jorden-routing.module';

import { JordenPage } from './jorden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JordenPageRoutingModule
  ],
  declarations: [JordenPage]
})
export class JordenPageModule {}
