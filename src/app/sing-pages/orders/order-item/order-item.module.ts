import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OrderItemPageRoutingModule} from './order-item-routing.module';

import {OrderItemPage} from './order-item.page';
import {ModalPageModule} from '../../biz-item/modal/modal.module';
import {ModalCommentsPage} from '../../biz-item/modal-comments/modal-comments.page';
import {ModalCommentsPageModule} from '../../biz-item/modal-comments/modal-comments.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageModule,
    ModalCommentsPageModule,
    OrderItemPageRoutingModule
  ],
  declarations: [OrderItemPage]
})
export class OrderItemPageModule {
}
