import {Component, OnInit} from '@angular/core';
import {GlobalConstService} from '../../../services/global-const.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  gConst: any;
  paymethod = {isWechat: true, isZhifubao: false};

  constructor(public globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

  selectPayment($event, id) {
    //wechat
    if (id == 1) {
      if ($event) {
        this.paymethod.isZhifubao = false;
      } else {
        this.paymethod.isZhifubao = true;
      }
    }
    //zhifubao
    if (id == 2) {
      if ($event) {
        this.paymethod.isWechat = false;
      } else {
        this.paymethod.isWechat = true;
      }
    }

    $event;
  }

  payment() {

  }

}
