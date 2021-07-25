import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule} from '@angular/common/http';
//import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularEditorModule } from '@gs/angular-editor';
//import { TagifyModule } from '@gs/angular-tagify';
import { AngularSpreadsheetModule } from 'angular-spreadsheet';
import { AngularJexcelModule } from 'angular-jexcel';


import { CalendarMonthViewComponent } from './calendar-month-view.component';
import { CalendarMonthViewHeaderComponent } from './calendar-month-view-header.component';
import { CalendarMonthCellComponent } from './calendar-month-cell.component';
import { CalendarOpenDayEventsComponent } from './calendar-open-day-events.component';
import { CalendarOpenDayMemoComponent } from './calendar-open-day-memo.component';
import { CalendarCommonModule } from '../common/calendar-common.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export {
  CalendarMonthViewComponent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarMonthViewEventTimesChangedEvent
} from './calendar-month-view.component';
export { MonthViewDay as CalendarMonthViewDay } from '../../calendar-utils/calendar-utils';
export { collapseAnimation } from './calendar-open-day-events.component';

@NgModule({
  imports: [CommonModule, DragAndDropModule, CalendarCommonModule,
	  //FlexLayoutModule, HttpClientModule, AngularEditorModule ,FormsModule, ReactiveFormsModule , NgbModule, TagifyModule.forRoot()],
              FlexLayoutModule, HttpClientModule, AngularEditorModule ,AngularSpreadsheetModule, AngularJexcelModule,FormsModule, ReactiveFormsModule , NgbModule ],
  declarations: [
    CalendarMonthViewComponent,
    CalendarMonthCellComponent,
    CalendarOpenDayEventsComponent,
    CalendarOpenDayMemoComponent,
	  CalendarMonthViewHeaderComponent
  ],
  providers: [],
  exports: [
    DragAndDropModule,
    CalendarMonthViewComponent,
    CalendarMonthCellComponent,
    CalendarOpenDayEventsComponent,
    CalendarOpenDayMemoComponent,
    CalendarMonthViewHeaderComponent
  ]
})
export class CalendarMonthModule {}
