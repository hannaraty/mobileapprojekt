import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquidsPage } from './liquids.page';

const routes: Routes = [
  {
    path: '',
    component: LiquidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiquidsPageRoutingModule {}
