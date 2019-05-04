import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuiToast} from './classes/toast';
import {SuiToastHeader} from './directives/toast-header';
import {SuiToastContainer} from './classes/toast-container';
import {SuiToastBody} from './directives/toast-body';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SuiToastBody,
    SuiToastHeader,
    SuiToast,
    SuiToastContainer
  ],
  exports: [
    SuiToastBody,
    SuiToastHeader,
    SuiToast,
    SuiToastContainer
  ]
})
export class SuiToastModule {
}
