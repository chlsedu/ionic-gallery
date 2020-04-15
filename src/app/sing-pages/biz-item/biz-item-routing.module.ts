import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BizItemPage } from './biz-item.page';

const routes: Routes = [
  {
    path: '',
    component: BizItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BizItemPageRoutingModule {}
