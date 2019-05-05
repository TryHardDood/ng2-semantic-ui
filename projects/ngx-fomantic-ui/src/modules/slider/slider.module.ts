import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuiSlider} from './components/slider';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SuiSlider
  ],
  exports: [
    SuiSlider
  ]
})
export class SuiSliderModule {
}
