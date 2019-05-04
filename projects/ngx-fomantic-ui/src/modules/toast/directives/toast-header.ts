import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'ng-template[suiToastHeader]'})
export class SuiToastHeader {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
