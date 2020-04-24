import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import {PhotoService} from '../../../services/photo.service';

@Component({
  selector: 'app-modal-comments',
  templateUrl: './modal-comments.page.html',
  styleUrls: ['./modal-comments.page.scss'],
})
export class ModalCommentsPage implements OnInit {
// Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  bizItem = 1;
  racing = 5;
  bizItems = [{
    id: 1,
    name: '打扫卫生'
  }, {
    id: 2,
    name: '搬运物件'
  }];
  races = [{
    id: 1,
    name: '1分'
  }, {
    id: 2,
    name: '2分'
  }, {
    id: 3,
    name: '3分'
  }, {
    id: 4,
    name: '4分'
  }, {
    id: 5,
    name: '5分'
  }];
  msg = 'qweqweqweqweqwe';

  constructor(navParams: NavParams, public modalController: ModalController, public photoService: PhotoService, public element: ElementRef) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('firstName'));
  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  ionViewDidEnter() {
    setTimeout(() => this.adjust(), 0);
  }

  adjust(textArea?: HTMLTextAreaElement) {
    let textareaWrapper = textArea || this.element.nativeElement.querySelector('.textarea-wrapper');
    textArea = textArea || this.element.nativeElement.querySelector('textarea');

    if (!textArea) {
      return;
    }

    // textArea.style.overflow = 'hidden';
    textareaWrapper.style.height = 'auto';
    textArea.style.height = 'auto';
    // textArea.style.height = (textArea.value ? textArea.scrollHeight : 100) + 'px';
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();

    const {data} = await modal.onWillDismiss();
    console.log(data);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  saveRadio(id) {
    this.bizItem = id;
    console.log(this.bizItem);
  }

  saveRaceRadio(id) {
    this.racing = id;
    console.log(this.racing);
  }

  edit() {

  }

  trash() {

  }

  save() {
    // this.races.push({name:"sd",id:8})
  }

}
