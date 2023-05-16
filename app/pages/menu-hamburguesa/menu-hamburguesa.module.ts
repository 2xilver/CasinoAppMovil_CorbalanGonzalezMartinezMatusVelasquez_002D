import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuHamburguesaPageRoutingModule } from './menu-hamburguesa-routing.module';

import { MenuHamburguesaPage } from './menu-hamburguesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuHamburguesaPageRoutingModule
  ],
  declarations: [MenuHamburguesaPage]
})
export class MenuHamburguesaPageModule {}
