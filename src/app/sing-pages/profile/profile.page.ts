import { Component, OnInit } from '@angular/core';
import {GlobalConstService} from '../../services/global-const.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  gConst: any;

  constructor(private globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
  }


  ngOnInit() {
  }

}
