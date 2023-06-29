import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagofPage } from './pagof.page';

const routes: Routes = [
  {
    path: '',
    component: PagofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagofPageRoutingModule {}
