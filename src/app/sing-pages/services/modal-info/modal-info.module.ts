import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ModalInfoPage} from './modal-info.page';
import {RouterModule, Routes} from '@angular/router';
import {ServicesPage} from '../services.page';

const routes: Routes = [
  {
    path: 'xxxx',
    component: ModalInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {
}
