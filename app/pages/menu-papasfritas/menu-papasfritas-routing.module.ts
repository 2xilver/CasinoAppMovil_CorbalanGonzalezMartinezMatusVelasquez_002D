import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPapasfritasPage } from './menu-papasfritas.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPapasfritasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPapasfritasPageRoutingModule {}
