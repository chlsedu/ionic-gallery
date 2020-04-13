import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slogo = {src: ''};

  constructor() {
  }

  ngOnInit() {
    this.slogo.src = 'assets/img/slogo.jpg';
  }

  scrollToTop() {
    // @ts-ignore
    document.querySelector('ion-content[containerTab1]').scrollToTop(500);
  }
}
