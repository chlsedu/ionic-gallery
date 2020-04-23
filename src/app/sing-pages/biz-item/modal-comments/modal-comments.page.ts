import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-modal-comments',
  templateUrl: './modal-comments.page.html',
  styleUrls: ['./modal-comments.page.scss'],
})
export class ModalCommentsPage implements OnInit {
// Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  bizItem = 1;
  bizItems = [{
    id: 1,
    name: '打扫卫生'
  }, {
    id: 2,
    name: '搬运物件'
  }];

  constructor(navParams: NavParams, public modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('firstName'));
  }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();

    const {data} = await modal.onWillDismiss();
    console.log(data);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  saveRadio(id) {
    this.bizItem = id;
    console.log(this.bizItem);
  }

}
