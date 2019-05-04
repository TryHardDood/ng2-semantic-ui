import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuiToast, SuiToastBody, SuiToastContainer, SuiToastHeader} from './classes/toast';
import {SuiToastConfig} from './classes/toast.config';

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
  static forRoot(): ModuleWithProviders {
    return {ngModule: SuiToastModule, providers: [SuiToastConfig]};
  }
}
