import {Component} from '@angular/core';
import {SuiToastConfig} from './toast-config';

@Component({
  selector: 'sui-toast-container',
  exportAs: 'suiToastContainer',
  template: `
    <sui-toast *ngFor="let toast of toastData"
               [id]="toast.id"
               [title]="toast.title"
               [message]="toast.message"
               [class]="toast.class"
               [showProgress]="toast.showProgress"
               [displayTime]="toast.displayTime"
               [showIcon]="toast.showIcon"
               [closeIcon]="toast.closeIcon"
               [progressUp]="toast.progressUp"
               [className]="toast.className"
               (close)="closeToast(toast.id)"></sui-toast>`
})
export class SuiToastContainer {
  toastData: Array<SuiToastConfig> = [];
  timeoutIds: { [toastId: number]: number } = {};
  private maxId = 0;

  addToast(data: SuiToastConfig) {
    data.id = data.id || ++this.maxId;
    data.showProgress = data.showProgress || 'bottom';
    data.class = data.class || 'info';
    data.displayTime = data.displayTime || 5000;

    this.toastData.unshift(data);
    this.timeoutIds[data.id] = window.setTimeout(() => this.closeToast(data.id), data.displayTime);
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
