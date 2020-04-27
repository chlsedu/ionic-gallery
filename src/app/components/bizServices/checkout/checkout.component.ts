import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ModalCommentsPage} from '../../../sing-pages/biz-item/modal-comments/modal-comments.page';
import {GlobalConstService} from '../../../services/global-const.service';
import {ModalMapPage} from './modal-map/modal-map.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  gConst: any;
  quantity: number = 1;
  items = [
    {name: '服务1', id: 1, datetime: ''},
    {name: '服务2', id: 2, datetime: ''},
    {name: '服务3', id: 3, datetime: ''},
    {name: '服务4', id: 4, datetime: ''},
    {name: '服务5', id: 5, datetime: ''},
  ];
  customDayShortNames = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  customPickerOptions: any;

  constructor(private router: Router, public modalController: ModalController, public globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
    this.customPickerOptions = {
      buttons: [{
        text: '取消',
        role: 'cancel'
      }, {
        text: '确定',
        handler: (value) => {
          console.log(this.items);
          // this.dataTime = value;
        }
      }]
    };
  }

  ngOnInit() {
  }

  trackByMethod(index: number, el: any): number {
    // return el.id;
    return index;
  }

  gotoPayment() {
    this.router.navigate(['/tabs/tab3/payment']);
  }

  Increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  stopPropagation($event) {
    $event.stopPropagation();
  }

  deleteItem($event) {
    $event.stopPropagation();
    alert('delete item!');
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

  datetimeChange($event, item) {
    $event;
    item;
  }

}
