import {Component, OnInit} from '@angular/core';
import {GlobalConstService} from '../../services/global-const.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  gConst: any;

  constructor(public globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

  gotoDetail() {
    alert('gotoDetail');
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
}
