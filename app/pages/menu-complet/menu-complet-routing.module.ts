import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCompletPage } from './menu-complet.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCompletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCompletPageRoutingModule {}
