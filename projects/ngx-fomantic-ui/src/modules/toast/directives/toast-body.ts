import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'ng-template[suiToastBody]',})
export class SuiToastBody {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
