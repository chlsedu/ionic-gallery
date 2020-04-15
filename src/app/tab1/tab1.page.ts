import {Component, OnInit} from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slogo = {src: ''};
  hideHeaderObj = {hideHeader: false};

  constructor(public commonService: CommonService) {
  }

  ngOnInit() {
    this.slogo.src = 'assets/img/slogo.jpg';
  }
}
