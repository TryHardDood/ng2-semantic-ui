import {Injectable} from '@angular/core';

@Injectable()
export class SuiToastConfig {
  title: string;
  message: string;
  showProgress?: string;
  class?: string;
  progressUp?: boolean;
  showIcon?: any;
  closeIcon?: boolean;
  displayTime?: number;
  className?: string;
  id?: number;
}
