import {Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SuiToastHeader} from '../directives/toast-header';
import {SuiToastBody} from '../directives/toast-body';

@Component({
  selector: 'sui-toast',
  exportAs: 'suiToast',
  template: `
    <div class="toast-box compact" (click)="close()">
      <div *ngIf="showProgress && showProgress === 'top'" class="ui attached active progress {{type}} {{showProgress}}">
        <div class="bar" [ngStyle]="{'transition': 'width ' + (this.timeout / 1000)  + 's', 'width': progress + '%'}"
             style="width: 100%;"></div>
      </div>
      <div class="icon {{type}} ui toast">
        <i class="{{type}} icon"></i>
        <div class="content">
          <ng-container *ngIf="header">
            <div class="header">{{header}}</div>
          </ng-container>
          <div class="header" *ngIf="headerTpl">
            <ng-template [ngTemplateOutlet]="headerTpl.templateRef"></ng-template>
          </div>
          <ng-container *ngIf="body">
            <div class="body">{{body}}</div>
          </ng-container>
          <div *ngIf="bodyTpl" class="body">
            <ng-template [ngTemplateOutlet]="bodyTpl.templateRef"></ng-template>
          </div>
        </div>
      </div>
      <div *ngIf="showProgress && showProgress === 'bottom'" class="ui attached active progress {{type}} {{showProgress}}">
        <div class="bar" [ngStyle]="{'transition': 'width ' + (this.timeout / 1000)  + 's', 'width': progress + '%'}"
             style="width: 100%;"></div>
      </div>
    </div>
  `
})
export class SuiToast implements OnInit {
  @Input() dismissible: boolean;
  @Input() header: string;
  @Input() body: string;
  @Input() type: string;

  @Input() showProgress?: string;
  @Input() timeout?: number;

  @Input() id: number;

  @Output('close') closeEvent = new EventEmitter();

  @ContentChild(SuiToastHeader) headerTpl: SuiToastHeader;
  @ContentChild(SuiToastBody) bodyTpl: SuiToastBody;

  progress: number;

  constructor() {
    this.dismissible = true;
    this.type = 'info';
  }

  ngOnInit(): void {
    if (this.timeout) {
      if (!this.showProgress) {
        this.showProgress = 'bottom';
      }

      this.progress = 0;
      window.setTimeout(() => this.close(), this.timeout);
      window.setTimeout(() => this.progress = 100, 300);
    }
  }

  close() {
    this.closeEvent.next(this.id);
  }
}
