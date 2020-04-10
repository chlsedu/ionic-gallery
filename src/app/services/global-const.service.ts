import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConstService {
  globalConst = {
    iconBack: {
      text: '返回',
      icon: ''
    }
  };

  constructor() {
  }

  public getConst(): any {
    return this.globalConst;
  }
}
