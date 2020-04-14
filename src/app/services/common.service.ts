import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
  }

  public static toggleFullScreen(full: boolean = true): void {
    const doc = window.document;
    const docEl = doc.documentElement;
    // @ts-ignore
    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    // @ts-ignore
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    // @ts-ignore
    const isFullscreenEnabled = doc.fullscreenEnabled || doc.mozFullScreenEnabled || doc.webkitFullscreenEnabled || doc.msFullscreenEnabled || false;
    // @ts-ignore
    const isFullscreen = doc.fullscreenElement || doc.msFullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || false;
    if (full && isFullscreenEnabled && !isFullscreen) {
      requestFullScreen!.call(docEl);
    } else if (isFullscreen) {
      cancelFullScreen!.call(doc);
    }
  }

  public static wScrollTo(): void {
    var doc = window.document;
    // If there's a hash, or addEventListener is undefined, stop here
    // @ts-ignore
    if (true) {
      //scroll to 1
      window.scrollTo(0, 1);
      var scrollTop = 1;
      let getScrollTop = function () {
        return window.pageYOffset || doc.compatMode === 'CSS1Compat' && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
      };
      //reset to 0 on bodyready, if needed
      let bodycheck = setInterval(function () {
        if (doc.body) {
          clearInterval(bodycheck);
          scrollTop = getScrollTop();
          window.scrollTo(0, scrollTop === 1 ? 0 : 1);
        }
      }, 15);
      setTimeout(function () {
        //at load, if user hasn't scrolled more than 20 or so...
        if (getScrollTop() < 20) {
          //reset to hide addr bar at onload
          window.scrollTo(0, scrollTop === 1 ? 0 : 1);
        }
      }, 0);
    }
  }
}
