import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'merkurius',
    loadChildren: () => import('./merkurius/merkurius.module').then( m => m.MerkuriusPageModule)
  },
  {
    path: 'venus',
    loadChildren: () => import('./venus/venus.module').then( m => m.VenusPageModule)
  },
  {
    path: 'jorden',
    loadChildren: () => import('./jorden/jorden.module').then( m => m.JordenPageModule)
  },
  {
    path: 'mars',
    loadChildren: () => import('./mars/mars.module').then( m => m.MarsPageModule)
  },
  {
    path: 'jupiter',
    loadChildren: () => import('./jupiter/jupiter.module').then( m => m.JupiterPageModule)
  },
  {
    path: 'saturnus',
    loadChildren: () => import('./saturnus/saturnus.module').then( m => m.SaturnusPageModule)
  },
  {
    path: 'uranus',
    loadChildren: () => import('./uranus/uranus.module').then( m => m.UranusPageModule)
  },
  {
    path: 'neptunus',
    loadChildren: () => import('./neptunus/neptunus.module').then( m => m.NeptunusPageModule)
  },
  {
    path: 'pluto',
    loadChildren: () => import('./pluto/pluto.module').then( m => m.PlutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
