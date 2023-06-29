import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPapasfritasPageRoutingModule } from './menu-papasfritas-routing.module';

import { MenuPapasfritasPage } from './menu-papasfritas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPapasfritasPageRoutingModule
  ],
  declarations: [MenuPapasfritasPage]
})
export class MenuPapasfritasPageModule {}
