import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  imgData = [{
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }, {
    src: 'assets/img/itemThumbnail.png'
  }];

  constructor() {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  loadData(event) {
    setTimeout(() => {
      this.imgData = this.imgData.concat(this.imgData);
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.imgData.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  trackByMethod(index: number, el: any): number {
    // return el.id;
    return index;
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
