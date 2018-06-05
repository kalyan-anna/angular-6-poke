import { Injectable } from '@angular/core';

function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  openNewTab(url: string) {
    const win = _window().open(url, '_blank');
    win.focus();
  }

}
