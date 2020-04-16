import {Component, OnInit} from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  hideHeaderObj = {hideHeader: false};

  constructor(public commonService: CommonService) {
  }

  ngOnInit() {
  }

}
