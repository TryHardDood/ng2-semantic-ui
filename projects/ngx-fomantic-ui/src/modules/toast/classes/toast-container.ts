import {Component} from '@angular/core';
import {SuiToastConfig} from './toast-config';

@Component({
  selector: 'sui-toast-container',
  exportAs: 'suiToastContainer',
  template: `
    <sui-toast *ngFor="let toast of toastData"
               [id]="toast.id"
               [header]="toast.header"
               [body]="toast.body"
               [type]="toast.type"
               [showProgress]="toast.showProgress"
               [timeout]="toast.timeout"
               (close)="closeToast(toast.id)"></sui-toast>`
})
export class SuiToastContainer {
  toastData: Array<SuiToastConfig> = [];
  timeoutIds: { [toastId: number]: number } = {};
  private maxId = 0;

  addToast(data: SuiToastConfig) {
    data.id = data.id || ++this.maxId;
    data.showProgress = data.showProgress || 'bottom';
    data.type = data.type || 'info';
    data.timeout = data.timeout || 5000;

    this.toastData.unshift(data);
    this.timeoutIds[data.id] = window.setTimeout(() => this.closeToast(data.id), data.timeout);
  }

  closeToast(toastId: number) {
    const x = this.toastData.findIndex(t => t.id === toastId);

    if (x > -1) {
      const id = this.toastData[x].id;
      window.clearTimeout(this.timeoutIds[id]);
      delete this.timeoutIds[id];
      this.toastData.splice(x, 1);
    }
  }
}
