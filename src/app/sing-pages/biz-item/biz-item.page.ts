import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../services/common.service';
import {GlobalConstService} from '../../services/global-const.service';

@Component({
  selector: 'app-biz-item',
  templateUrl: './biz-item.page.html',
  styleUrls: ['./biz-item.page.scss'],
})
export class BizItemPage implements OnInit {
  hideHeaderObj = {hideHeader: false};
  gConst: any;

  constructor(public commonService: CommonService, public globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

}
