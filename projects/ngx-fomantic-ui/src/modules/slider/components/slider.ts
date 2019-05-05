import {Component, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

let nextId = 0;

const SLIDER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SuiSlider),
  multi: true
};

const edge = window.navigator.userAgent.indexOf('Edge') > -1;

@Component({
  selector: 'sui-slider',
  template: `
    <div class="inner">
      <div class="ticks-container" *ngIf="showTicks">
        <div class="tick" *ngFor="let s of _ticks" [ngStyle]="s">
        </div>
      </div>
      <div class="inputs">
        <div class="track"></div>
        <div [ngStyle]="_fill" class="track-fill"></div>
        <ng-container *ngFor="let value of _values; let i = index; let odd = odd; trackBy: trackIndex">
          <input
            type="range"
            [id]="id + '-' + i"
            [attr.list]="id + '-list'"
            [attr.orientation]="orientation"
            [class.odd]="odd"
            [class.active]="_active[i]"
            [ngModel]="value"
            (ngModelChange)="setValue($event, i)"
            [min]="min"
            [max]="max"
            [step]="step"
            [disabled]="disabled"
            (input)="onChange($event)"
            (change)="onChange($event)"
            (mouseenter)="setActive(i, true)"
            (mouseleave)="setActive(i, false)"
            style="width: 100%"
          />
          <div class="thumb" [class.active]="_active[i]" [ngStyle]="_thumbs[i]" style="right: auto;">
          </div>
        </ng-container>
      </div>
    </div>

  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
    sui-slider {
      display: block;
      clear: both;
    }

    input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      margin: 10.3px 0;
      z-index: 301;
    }

    input[type=range]:focus {
      outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 8.4px;
      cursor: pointer;
      background: transparent;
      border-radius: 1.3px;
      z-index: 301;
    }

    input[type=range]::-webkit-slider-thumb {
      height: 29px;
      width: 31px;
      border-radius: 50px;
      background: transparent;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -10.5px;
      z-index: 301;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
      background: transparent;
    }

    input[type=range]::-moz-range-track {
      width: 100%;
      height: 8.4px;
      cursor: pointer;
      background: transparent;
      border-radius: 1.3px;
      z-index: 301;
    }

    input[type=range]::-moz-range-thumb {
      height: 29px;
      width: 31px;
      border-radius: 50px;
      background: transparent;
      cursor: pointer;
      z-index: 301;
    }

    input[type=range]::-ms-track {
      width: 100%;
      height: 8.4px;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
      z-index: 301;
    }

    input[type=range]::-ms-fill-lower {
      background: transparent;
      border-radius: 2.6px;
      z-index: 301;
    }

    input[type=range]::-ms-fill-upper {
      background: transparent;
      border-radius: 2.6px;
      z-index: 301;
    }

    input[type=range]::-ms-thumb {
      height: 29px;
      width: 31px;
      border-radius: 50px;
      background: transparent;
      cursor: pointer;
      z-index: 301;
    }

    input[type=range]:focus::-ms-fill-lower {
      background: transparent;
    }

    input[type=range]:focus::-ms-fill-upper {
      background: transparent;
    }
  `],
  providers: [SLIDER_VALUE_ACCESSOR],
  host: {
    class: 'ui slider'
  }
})
export class SuiSlider implements ControlValueAccessor, OnInit {
  @Input()
  id = `range-${++nextId}`;
  @Input()
  min = 0;
  @Input()
  max = 100;
  @Input()
  step = 1;
  @Input()
  orientation = 'horizontal';

  @HostBinding('class.disabled')
  @Input()
  disabled = false;

  @Input()
  showTicks = false;
  @Input()
  tickStep: number;

  _values = [0];
  _percents = [0];
  _thumbs: any[] = [];
  _fill: any;
  _ticks = [];
  _active = [];

  @HostBinding('class.active')
  active: boolean;

  get value() {
    if (!this._values) {
      return 0;
    }
    return this._values[0];
  }

  set value(val: any) {
    val = ('' + val).split(',');
    if (String(val) !== String(this._values)) {
      this.setValues(val);
      this.onChangeCallback(this._values);

      this.change.emit({
        value: this._values,
        percent: this.percent
      });
    }
  }

  get percent(): string {
    const pct = this._percents;
    return '' + pct[0];
  }

  @Output()
  change = new EventEmitter();

  @HostBinding('class.horizontal')
  get isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  @HostBinding('class.vertical')
  get isVertical(): boolean {
    return this.orientation === 'vertical';
  }

  setValues(values: number[]) {
    this._values = values;
    this._percents = values
      .map(v => Math.max(this.min, Math.min(this.max, v)))
      .map(v => Math.round((100 * (v - this.min)) / (this.max - this.min)));

    this._thumbs = this._percents.map(p => {
      return {
        left: `calc(${p}% - ${p / 100}em)`
      };
    });

    this._fill = this.getFill();

    if (this.showTicks) {
      this._ticks = this.getTicks();
    }
  }

  setActive(index: number, active: boolean) {
    this._active[index] = active;
  }

  ngOnInit(): void {
    if (this.showTicks) {
      this._ticks = this.getTicks();
    }
  }

  setValue(val: number, index: number) {
    if (this._values[index] !== val) {
      this._values[index] = val;
      this.setValues(this._values);
      this.onChangeCallback(this.value);

      this.change.emit({
        value: this.value,
        percent: this.percent
      });
    }
  }

  getCount(): any {
    const idxs = [];
    const step = this.tickStep || this.step;

    let i = this.min;
    while (i <= this.max) {
      idxs.push(i);
      i += step;
    }

    return idxs;
  }

  getTicks(): any {
    return this.getCount().map(p => {
      return {
        left: `calc(${p}% - ${p / 100 - 0.5}em)`
      };
    });
  }

  getFill(): any {
    const percentMin = 0;
    return {
      left: `${percentMin}%`,
      right: `${100 - +this.percent}%`
    };
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event): void {
    event.stopPropagation();
    this.active = true;
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event): void {
    event.stopPropagation();
    this.active = false;
  }

  onChange(event): void {
    event.stopPropagation();

    this.change.emit({
      value: this.value,
      percent: this.percent
    });
  }

  writeValue(val): void {
    val = String(val).split(',');
    if (String(val) !== String(this._values)) {
      this.setValues(val);
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  trackIndex(index) {
    return index;
  }

  private onTouchedCallback: () => void = () => {
    // placeholder
  }

  private onChangeCallback: (_: any) => void = () => {
    // placeholder
  }
}
