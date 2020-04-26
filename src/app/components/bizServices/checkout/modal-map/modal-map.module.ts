import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ModalMapPage} from './modal-map.page';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'xxx',
    component: ModalMapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // BaiduMapModule.forRoot({ak: 'gYgULa1jV7bufpSpfcDjeIxBrEWmhmhy'}),
    RouterModule.forChild(routes)
  ],
  declarations: [ModalMapPage],
  // exports: [ModalMapPage]
})
export class ModalMapPageModule {
}
