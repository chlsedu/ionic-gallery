import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ModalPage} from './modal.page';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'x',
    component: ModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPage],
  exports: [ModalPage]
})
export class ModalPageModule {
}
