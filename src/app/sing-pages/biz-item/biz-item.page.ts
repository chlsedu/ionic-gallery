import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {CommonService} from '../../services/common.service';
import {GlobalConstService} from '../../services/global-const.service';
import {ModalController} from '@ionic/angular';
import {ModalPage} from './modal/modal.page';
import {ModalCommentsPage} from './modal-comments/modal-comments.page';

@Component({
  selector: 'app-biz-item',
  templateUrl: './biz-item.page.html',
  styleUrls: ['./biz-item.page.scss'],
})
export class BizItemPage implements OnInit {
  hideHeaderObj = {hideHeader: false};
  gConst: any;
  imgData = [{
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }];

  constructor(public commonService: CommonService, public globalConstService: GlobalConstService, private location: Location, public modalController: ModalController) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  trackByMethod(index: number, el: any): number {
    // return el.id;
    return index;
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
