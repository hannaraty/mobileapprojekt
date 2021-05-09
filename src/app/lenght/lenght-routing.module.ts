import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LenghtPage } from './lenght.page';

const routes: Routes = [
  {
    path: '',
    component: LenghtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LenghtPageRoutingModule {}
