import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BizItemPageRoutingModule } from './biz-item-routing.module';

import { BizItemPage } from './biz-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BizItemPageRoutingModule
  ],
  declarations: [BizItemPage]
})
export class BizItemPageModule {}
