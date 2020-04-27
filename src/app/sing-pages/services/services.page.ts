import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {GlobalConstService} from '../../services/global-const.service';
import {ModalPage} from '../biz-item/modal/modal.page';
import {ModalInfoPage} from './modal-info/modal-info.page';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  gConst: any;
  items = [
    {name: '服务1', id: 1, datetime: ''},
    {name: '服务2', id: 2, datetime: ''},
    {name: '服务3', id: 3, datetime: ''},
    {name: '服务4', id: 4, datetime: ''},
    {name: '服务5', id: 5, datetime: ''},
  ];
  customDayShortNames = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  constructor(private router: Router, public modalController: ModalController, public globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

  trackByMethod(index: number, el: any): number {
    // return el.id;
    return index;
  }

  deleteOrder($event, id) {
    // $event.preventDefault();
    $event.stopPropagation();

    alert('delete order');
  }

  changeClass($event, id: number = 1) {
    let el: HTMLElement = $event.target;
    let n = el.nextElementSibling, p = el.previousElementSibling;
    while (n) {
      n.classList.remove('activated');
      n = n.nextElementSibling;
    }
    while (p) {
      p.classList.remove('activated');
      p = p.previousElementSibling;
    }
    el.classList.add('activated');
  }

  async presentModal($event, id) {
    $event.stopPropagation();
    const modal = await this.modalController.create({
      component: ModalInfoPage,
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
