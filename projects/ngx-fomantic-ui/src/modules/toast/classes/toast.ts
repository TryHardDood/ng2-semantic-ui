import {Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

/**
 * The header content of a toast.
 */
@Directive({selector: 'ng-template[suiToastHeader]'})
export class SuiToastHeader {
  constructor(public templateRef: TemplateRef<any>) {
  }
}

/**
 * The body content of a toast.
 */
@Directive({selector: 'ng-template[suiToastBody]'})
export class SuiToastBody {
  constructor(public templateRef: TemplateRef<any>) {
  }
}

/**
 * A way to notify people of stuff.
 */
@Component({
  selector: 'sui-toast',
  exportAs: 'suiToast',
  template: `
  <div class="toast-box compact" (click)="dismissible && close()">
    <div *ngIf="showProgress && showProgress === 'top'" class="ui attached active progress {{type}} {{showProgress}}">
      <div class="bar" [ngStyle]="{'transition': 'width ' + (this.timeout / 1000) + 's linear'}" style="width: 100%;"></div>
    </div>
    <div class="icon {{type}} ui toast">
      <i class="{{type}} icon"></i>
      <div class="content">
        <ng-container *ngIf="header"><div class="header">{{header}}</div></ng-container>
        <ng-template *ngIf="headerTpl" [ngTemplateOutlet]="headerTpl.templateRef"></ng-template>
        <ng-container *ngIf="body"><div class="body">{{body}}</div></ng-container>
        <ng-template *ngIf="bodyTpl" [ngTemplateOutlet]="bodyTpl.templateRef"></ng-template>
      </div>
    </div>
    <div *ngIf="showProgress && showProgress === 'bottom'" class="ui attached active progress {{type}} {{showProgress}}">
      <div class="bar" [ngStyle]="{'transition': 'width ' + (this.timeout / 1000)  + 's linear'}" style="width: 100%;"></div>
    </div>
  </div>
  `
})
export class SuiToast {
  /**
   *  Whether the toast can be closed by the user
   */
  @Input() dismissible = true;

  /*
  * Header text
  */
  @Input() header: string;

  /**
   * Body Text
   */
  @Input() body: string;

  /**
   * Type of the toast.
   */
  @Input() type: string;

  @Input() showProgress: string;

  @Input() timeout?: number;

  /**
   * A unique identifier for use in a container
   */
  @Input() id: number;

  /**
   * An event to perform on close, if dismissible
   */
  @Output('close') closeEvent = new EventEmitter();

  /**
   * Header content
   */
  @ContentChild(SuiToastHeader) headerTpl: SuiToastHeader;

  /**
   * Body content
   */
  @ContentChild(SuiToastBody) bodyTpl: SuiToastBody;

  constructor() {
    this.type = 'info';
    this.timeout = this.timeout || 5000;
  }

  close() {
    this.closeEvent.next(this.id);
  }
}

export interface SuiToastData {
  header: string;
  body: string;
  showProgress?: string;
  type?: string;
  id?: number;
  timeout?: number;
}

/**
 * A collection of toasts that can be added to programatically.
 * It has a mechanism to automatically dismiss the most recently added ones.
 */
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
  toastData: Array<SuiToastData> = [];
  timeoutIds: { [toastId: number]: number } = {};
  private maxId = 0;

  addToast(data: SuiToastData) {
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
