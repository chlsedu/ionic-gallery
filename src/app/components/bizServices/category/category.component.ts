import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  imgData = [{
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }, {
    src: 'assets/img/slogo.jpg'
  }];
  constructor() { }

  ngOnInit() {}

  trackByMethod(index: number, el: any): number {
    // return el.id;
    return index;
  }

}
