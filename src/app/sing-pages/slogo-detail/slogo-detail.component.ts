import {Component, OnInit} from '@angular/core';
import {GlobalConstService} from '../../services/global-const.service';

@Component({
  selector: 'app-slogo-detail',
  templateUrl: './slogo-detail.component.html',
  styleUrls: ['./slogo-detail.component.scss'],
})
export class SlogoDetailComponent implements OnInit {
  gConst: any;

  constructor(private globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

}
