import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAlmuerzoPageRoutingModule } from './menu-almuerzo-routing.module';

import { MenuAlmuerzoPage } from './menu-almuerzo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAlmuerzoPageRoutingModule
  ],
  declarations: [MenuAlmuerzoPage]
})
export class MenuAlmuerzoPageModule {}
