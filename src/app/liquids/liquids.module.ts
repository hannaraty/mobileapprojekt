import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiquidsPageRoutingModule } from './liquids-routing.module';

import { LiquidsPage } from './liquids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiquidsPageRoutingModule
  ],
  declarations: [LiquidsPage]
})
export class LiquidsPageModule {}
