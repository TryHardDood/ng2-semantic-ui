import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'ng-template[suiToastTitle]'})
export class SuiToastTitle {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
