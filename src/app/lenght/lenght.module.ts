import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LenghtPageRoutingModule } from './lenght-routing.module';

import { LenghtPage } from './lenght.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LenghtPageRoutingModule
  ],
  declarations: [LenghtPage]
})
export class LenghtPageModule {}
