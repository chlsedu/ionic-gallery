import {Component, OnInit} from '@angular/core';
import {GlobalConstService} from '../../services/global-const.service';

@Component({
  selector: 'app-slide-detail',
  templateUrl: './slide-detail.component.html',
  styleUrls: ['./slide-detail.component.scss'],
})
export class SlideDetailComponent implements OnInit {
  gConst: any;

  constructor(private globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

}
