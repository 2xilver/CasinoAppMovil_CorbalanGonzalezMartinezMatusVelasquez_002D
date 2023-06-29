import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuHamburguesaPage } from './menu-hamburguesa.page';

const routes: Routes = [
  {
    path: '',
    component: MenuHamburguesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuHamburguesaPageRoutingModule {}
