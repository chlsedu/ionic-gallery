import {Component, OnInit} from '@angular/core';
import {GlobalConstService} from '../../../services/global-const.service';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../../biz-item/modal/modal.page';
import {ModalCommentsPage} from '../../biz-item/modal-comments/modal-comments.page';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.page.html',
  styleUrls: ['./order-item.page.scss'],
})
export class OrderItemPage implements OnInit {
  gConst: any;

  constructor(public globalConstService: GlobalConstService, private router: Router, public modalController: ModalController) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

  gotoBizItem() {
    this.router.navigate(['/sing-page/biz-item']);
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

  async presentModalComments() {
    const modal = await this.modalController.create({
      component: ModalCommentsPage,
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
}
