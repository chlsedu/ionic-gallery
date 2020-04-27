import {Component, OnInit} from '@angular/core';
import {GlobalConstService} from '../../../services/global-const.service';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../../biz-item/modal/modal.page';
import {ModalCommentsPage} from '../../biz-item/modal-comments/modal-comments.page';
import {ModalMapPage} from '../../../components/bizServices/checkout/modal-map/modal-map.page';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.page.html',
  styleUrls: ['./order-item.page.scss'],
})
export class OrderItemPage implements OnInit {
  gConst: any;
  datetime = '';
  /*items = [
    {name: '服务1', id: 1, datetime: ''},
    {name: '服务2', id: 2, datetime: ''},
    {name: '服务3', id: 3, datetime: ''},
    {name: '服务4', id: 4, datetime: ''},
    {name: '服务5', id: 5, datetime: ''},
  ];*/
  customDayShortNames = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  constructor(public globalConstService: GlobalConstService, private router: Router, public modalController: ModalController) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

  trackByMethod(index: number, el: any): number {
    // return el.id;
    return index;
  }

  gotoBizItem() {
    this.router.navigate(['/sing-pages/biz-item']);
  }

  async presentModalMap() {
    const modal = await this.modalController.create({
      component: ModalMapPage,
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

  async presentModalComments($event) {
    $event.stopPropagation();
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
