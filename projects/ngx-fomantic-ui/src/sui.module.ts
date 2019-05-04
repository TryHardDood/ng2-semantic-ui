import {NgModule} from '@angular/core';
import {SuiMessageModule, SuiPaginationModule} from './collections/internal';
import {
  SuiAccordionModule,
  SuiCheckboxModule,
  SuiCollapseModule,
  SuiDatepickerModule,
  SuiDimmerModule,
  SuiDropdownModule,
  SuiModalModule,
  SuiPopupModule,
  SuiProgressModule,
  SuiRatingModule,
  SuiSearchModule,
  SuiSelectModule,
  SuiSidebarModule,
  SuiTabsModule,
  SuiTransitionModule
} from './modules/internal';
import {SuiLocalizationModule} from './behaviors/internal';
import {SuiUtilityModule} from './misc/internal';

@NgModule({
  exports: [
    SuiMessageModule,
    SuiPaginationModule,

    SuiAccordionModule,
    SuiCheckboxModule,
    SuiCollapseModule,
    SuiDatepickerModule,
    SuiDimmerModule,
    SuiDropdownModule,
    SuiModalModule,
    SuiPopupModule,
    SuiProgressModule,
    SuiRatingModule,
    SuiSearchModule,
    SuiSelectModule,
    SuiSidebarModule,
    SuiTabsModule,
    SuiTransitionModule,

    SuiLocalizationModule,

    SuiUtilityModule
  ]
})
export class SuiModule {
}
