import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuiToast} from './classes/toast';
import {SuiToastContainer} from './classes/toast-container';
import {SuiToastTitle} from './directives/toast-title';
import {SuiToastMessage} from './directives/toast-message';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SuiToastTitle,
    SuiToastMessage,
    SuiToast,
    SuiToastContainer
  ],
  exports: [
    SuiToastTitle,
    SuiToastMessage,
    SuiToast,
    SuiToastContainer
  ]
})
export class SuiToastModule {
}
