import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagofPageRoutingModule } from './pagof-routing.module';

import { PagofPage } from './pagof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagofPageRoutingModule
  ],
  declarations: [PagofPage]
})
export class PagofPageModule {}
