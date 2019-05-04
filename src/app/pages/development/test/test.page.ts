import {Component, ViewChild} from '@angular/core';
import {SuiToastContainer} from '../../../../../projects/ngx-fomantic-ui/src';

@Component({
    selector: 'demo-page-test',
    templateUrl: './test.page.html'
})
export class TestPage {

  toastCounter = 0;

  @ViewChild('toastContainer')
  toastContainer: SuiToastContainer;

  addToast() {
    this.toastContainer.addToast({
      header: 'New notification',
      body: `Hello this is notification #${++this.toastCounter}`,
      type: 'warning',
      showProgress: 'top'
    });
  }

  addToast2() {
    this.toastContainer.addToast({
      header: 'New notification',
      body: `Hello this is notification #${++this.toastCounter}`,
      type: 'error',
      showProgress: 'bottom'
    });
  }
}
