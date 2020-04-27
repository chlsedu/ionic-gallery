import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ServicesPageRoutingModule} from './services-routing.module';

import {ServicesPage} from './services.page';
import {ModalInfoPageModule} from './modal-info/modal-info.module';
import {ModalPageModule} from '../biz-item/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageModule,
    ModalInfoPageModule,
    ServicesPageRoutingModule
  ],
  declarations: [ServicesPage]
})
export class ServicesPageModule {
}
