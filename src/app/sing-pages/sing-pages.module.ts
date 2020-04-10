import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SingPagesPageRoutingModule} from './sing-pages-routing.module';

import {SingPagesPage} from './sing-pages.page';
import {SlogoDetailComponent} from './slogo-detail/slogo-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingPagesPageRoutingModule
  ],
  declarations: [SingPagesPage,
    SlogoDetailComponent]
})
export class SingPagesPageModule {
}
