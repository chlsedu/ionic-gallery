import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {BizItemPageRoutingModule} from './biz-item-routing.module';

import {BizItemPage} from './biz-item.page';
import {ModalPageModule} from './modal/modal.module';
import {ModalCommentsPageModule} from './modal-comments/modal-comments.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageModule,
    ModalCommentsPageModule,
    BizItemPageRoutingModule
  ],
  declarations: [BizItemPage],
  // exports: [ModalComponent]
})
export class BizItemPageModule {
}
