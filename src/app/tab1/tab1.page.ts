import {Component, OnInit} from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slogo = {src: ''};
  hideHeader = false;

  constructor() {
  }

  ngOnInit() {
    this.slogo.src = 'assets/img/slogo.jpg';
  }

  scrollToTop() {
    // CommonService.wScrollTo();
    // @ts-ignore
    document.querySelector('ion-content[containerTab1]').scrollToTop(500);
  }

  onScroll($event: CustomEvent) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.hideHeader = scrollTop >= 225;

      if (this.hideHeader) {
        window.scrollTo(0, 1);
      } else {
        window.scrollTo(0, 0);
      }
      window.onscroll = function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var top_div = document.getElementById( "top_div" );
        if( t >= 300 ) {
          top_div.style.display = "inline";
        } else {
          top_div.style.display = "none";
        }
        alert("windows scroll events!")
      }
    }
  }
}
