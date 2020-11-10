import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JordenPage } from './jorden.page';

const routes: Routes = [
  {
    path: '',
    component: JordenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JordenPageRoutingModule {}
