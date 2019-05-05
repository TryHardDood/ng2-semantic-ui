import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'ng-template[suiToastMessage]',})
export class SuiToastMessage {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
