import { Injectable } from '@angular/core';

@Injectable()
export class SuiToastConfig {
  header: string;
  body: string;
  showProgress?: string;
  type?: string;
  id?: number;
  timeout?: number;
}
