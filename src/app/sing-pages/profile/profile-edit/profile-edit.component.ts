import {Component, OnInit} from '@angular/core';
import {GlobalConstService} from '../../../services/global-const.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  gConst: any;
  value = '';

  constructor(private globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

}
