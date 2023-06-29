import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCompletPageRoutingModule } from './menu-complet-routing.module';

import { MenuCompletPage } from './menu-complet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCompletPageRoutingModule
  ],
  declarations: [MenuCompletPage]
})
export class MenuCompletPageModule {}
