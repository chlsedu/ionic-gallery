import {Component, OnInit} from '@angular/core';
import {GlobalConstService} from '../../services/global-const.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  gConst: any;
  status = false;
  isRegister = false;
  errorMsg = '';
  nameMsg = '';
  pwdMsg = '';
  model = {username: '', password: '', confirmPassword: ''};

  constructor(private globalConstService: GlobalConstService) {
    this.gConst = globalConstService.getConst();
  }

  ngOnInit() {
  }

  onChange(type: number) {
    if (type == 1) {
      let nameReg = /^[a-zA-Z0-9_-]{0,}$/;
      if (!nameReg.test(this.model.username)) {
        this.nameMsg = '手机号不能含有中文或特殊字符！';
      } else if (this.model.username.length > 25) {
        this.nameMsg = '手机号超过长度限制！';
      } else if (this.model.username.length <= 0) {
        this.nameMsg = '手机号不能为空！';
      } else {
        this.nameMsg = '';
      }
    } else if (type == 2) {
      let pwdReg = /^(\w){6,20}$/;
      if (this.model.password.length < 6 || this.model.password.length > 20) {
        this.pwdMsg = '密码长度为6~20位';
      } else if (!pwdReg.test(this.model.password)) {
        this.pwdMsg = '密码由字母、数字、下划线组成';
      } else {
        this.pwdMsg = '';
      }
    }
    this.errorMsg = this.nameMsg.length <= 0 ? this.pwdMsg : this.nameMsg;
    this.status = this.errorMsg.length <= 0 &&
      this.model.username.length > 0 &&
      this.model.password.length > 0;
  }

  onBlur() {
    if (this.model.username.length <= 0) {
      this.errorMsg = '手机号不能为空';
    } else if (this.model.password.length <= 0) {
      this.errorMsg = '密码不能为空';
    } else if (this.model.confirmPassword == this.model.password) {
      this.errorMsg = '密码不一致';
    }
  }

  login() {
    /*this.userService.login({
      userName: '610322197906236483',
      password: '236483',
      version: '18'
    });*/
  }

  register() {
    /*this.userService.login({
      userName: '610322197906236483',
      password: '236483',
      version: '18'
    });*/
  }

}
