import {Component, OnInit} from '@angular/core';
import {CommonService} from '../services/common.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  quantity = 1;
  hideHeaderObj = {hideHeader: false};

  constructor(public commonService: CommonService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  Increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  goToCheckout() {
    this.router.navigate(['checkout'], {relativeTo: this.route});
  }

  deleteItem($event) {
    $event.stopPropagation();
    alert('delete item!');
  }

  stopPropagation($event) {
    $event.stopPropagation();
  }
}
