import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'merkurius',
    loadChildren: () => import('./pages/merkurius/merkurius.module').then( m => m.MerkuriusPageModule)
  },
  {
    path: 'venus',
    loadChildren: () => import('./pages/venus/venus.module').then( m => m.VenusPageModule)
  },
  {
    path: 'jorden',
    loadChildren: () => import('./pages/jorden/jorden.module').then( m => m.JordenPageModule)
  },
  {
    path: 'mars',
    loadChildren: () => import('./pages/mars/mars.module').then( m => m.MarsPageModule)
  },
  {
    path: 'jupiter',
    loadChildren: () => import('./pages/jupiter/jupiter.module').then( m => m.JupiterPageModule)
  },
  {
    path: 'saturnus',
    loadChildren: () => import('./pages/saturnus/saturnus.module').then( m => m.SaturnusPageModule)
  },
  {
    path: 'uranus',
    loadChildren: () => import('./pages/uranus/uranus.module').then( m => m.UranusPageModule)
  },
  {
    path: 'neptunus',
    loadChildren: () => import('./pages/neptunus/neptunus.module').then( m => m.NeptunusPageModule)
  },
  {
    path: 'pluto',
    loadChildren: () => import('./pages/pluto/pluto.module').then( m => m.PlutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
