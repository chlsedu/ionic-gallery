import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCommentsPage } from './modal-comments.page';
import {RouterModule, Routes} from '@angular/router';
import {ModalPage} from '../modal/modal.page';

const routes: Routes = [
  {
    path: 'xx',
    component: ModalCommentsPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalCommentsPage],
  exports: [ModalCommentsPage]
})
export class ModalCommentsPageModule {}
