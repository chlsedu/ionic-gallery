import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    // loop: true,
    autoplay: {
      delay: 5000,
    },
  };

  constructor() {
  }

  ngOnInit() {
  }
}
