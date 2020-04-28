import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {PhotoService} from '../../../services/photo.service';
import {ModalPage} from '../../biz-item/modal/modal.page';
import {CameraSource} from '@capacitor/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
// Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  msg = 'qweqweqweqweqwe';
  private cameraSource: any;

  constructor(navParams: NavParams, public modalController: ModalController, public photoService: PhotoService, public element: ElementRef) {
    // componentProps can also be accessed at construction time using NavParams
    this.cameraSource = CameraSource;
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

  edit() {

  }

  trash() {

  }

  save() {
    // this.races.push({name:"sd",id:8})
  }

}
