import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAlmuerzoPage } from './menu-almuerzo.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAlmuerzoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAlmuerzoPageRoutingModule {}
