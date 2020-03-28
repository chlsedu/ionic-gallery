import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {
  Plugins, CameraResultType, Capacitor, FilesystemDirectory,
  CameraPhoto, CameraSource
} from '@capacitor/core';
import {Photo} from '../interfaces/Photo';

const {Camera, Filesystem, Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];

  constructor(public toastController: ToastController) {
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    }).catch(ex => {
      this.presentToast(ex);
      const a: CameraPhoto = {format: null};
      return a; // p4
    });

    if (capturedPhoto.format != null) {
      this.photos.unshift({
        filepath: 'soon...',
        webviewPath: capturedPhoto.webPath
      });
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

}
