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
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  {
    path: 'weight',
    loadChildren: () => import('./weight/weight.module').then( m => m.WeightPageModule)
  },  
  {
    path: 'lenght',
    loadChildren: () => import('./lenght/lenght.module').then( m => m.LenghtPageModule)
  },
  {
    path: 'liquids',
    loadChildren: () => import('./liquids/liquids.module').then( m => m.LiquidsPageModule)
  },
  {
    path: 'currency',
    loadChildren: () => import('./currency/currency.module').then( m => m.CurrencyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
