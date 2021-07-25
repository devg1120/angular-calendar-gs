import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef
} from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
  AnimationTriggerMetadata
} from '@angular/animations';
import { CalendarEvent } from '../../calendar-utils/calendar-utils';
import { isWithinThreshold, trackByEventId } from '../common/util';

//import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularEditorModule } from '@gs/angular-editor';
//import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularEditorConfig } from '@gs/angular-editor';


export const collapseAnimation: AnimationTriggerMetadata = trigger('collapse', [
  state(
    'void',
    style({
      height: 0,
      overflow: 'hidden',
      'padding-top': 0,
      'padding-bottom': 0
    })
  ),
  state(
    '*',
    style({
      height: '*',
      overflow: 'hidden',
      'padding-top': '*',
      'padding-bottom': '*'
    })
  ),
  transition('* => void', animate('150ms ease-out')),
  transition('void => *', animate('150ms ease-in'))
]);

@Component({
  selector: 'mwl-calendar-open-day-events',
  template: `
    <ng-template
      #defaultTemplate
      let-events="events"
      let-eventClicked="eventClicked"
      let-isOpen="isOpen"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-open-day-panel"
        [@collapse]
        *ngIf="isOpen"
        role="application"
      >
      <div class="cal-open-day-events">
        <span
          tabindex="-1"
          role="alert"
          [attr.aria-label]="
            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'
          "
        ></span>
        <span
          tabindex="0"
          role="landmark"
          [attr.aria-label]="
            { date: date, locale: locale }
              | calendarA11y: 'openDayEventsLandmark'
          "
        ></span>
        <div class="cal-open-day-events-list"
          *ngFor="let event of events; trackBy: trackByEventId"
          [ngClass]="event?.cssClass"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
        >
          <span
            class="cal-event"
            [ngStyle]="{ backgroundColor: event.color?.primary }"
          >
          </span>
          &ngsp;
          <mwl-calendar-event-title  class="cal-event-title"
            [event]="event"
            [customTemplate]="eventTitleTemplate"
            view="month"
            (mwlClick)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            (mwlKeydownEnter)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            tabindex="0"
            [attr.aria-label]="
              { event: event, locale: locale }
                | calendarA11y: 'eventDescription'
            "
          >
          </mwl-calendar-event-title>
          &ngsp;
	  <!--
          <mwl-calendar-event-actions
            [event]="event"
            [customTemplate]="eventActionsTemplate"
          >
          </mwl-calendar-event-actions>
	  -->
        </div>
      </div>
      <!--
	<textarea class="cal-open-day-memo"></textarea>
        -->
	<!--
	<angular-editor [placeholder]="'Enter text here...'" [(ngModel)]="htmlContent"></angular-editor>
	-->
	<!--
	<angular-editor formControlName="htmlContent" [config]="editorConfig"><h1>TEST</h1></angular-editor>
	-->
	
	<mwl-calendar-open-day-memo class="cal-open-day-memo"></mwl-calendar-open-day-memo>
	
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        events: events,
        eventClicked: eventClicked,
        isOpen: isOpen,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
  animations: [collapseAnimation]
})
export class CalendarOpenDayEventsComponent {
  @Input() locale: string;

  @Input() isOpen: boolean = false;

  @Input() events: CalendarEvent[];

  @Input() customTemplate: TemplateRef<any>;

  @Input() eventTitleTemplate: TemplateRef<any>;

  @Input() eventActionsTemplate: TemplateRef<any>;

  @Input() date: Date;

  @Output()
  eventClicked = new EventEmitter<{
    event: CalendarEvent;
    sourceEvent: MouseEvent | KeyboardEvent;
  }>();

  trackByEventId = trackByEventId;

  validateDrag = isWithinThreshold;
	 
	htmlContent: "<h1>TEST</h1>";

 editorConfig: AngularEditorConfig = {
	     editable: true,
	       spellcheck: false,
	       height: 'auto',
	       minHeight: '10',
	       maxHeight: 'auto',
	       width: 'auto',
	       minWidth: '0',
	       translate: 'yes',
	       enableToolbar: true,
	       showToolbar: true,
	       placeholder: 'Enter text here...',
	       defaultParagraphSeparator: '',
	       defaultFontName: '',
	       defaultFontSize: '',
	       fonts: [
		               {class: 'arial', name: 'Arial'},
		               {class: 'times-new-roman', name: 'Times New Roman'},
		               {class: 'calibri', name: 'Calibri'},
		               {class: 'comic-sans-ms', name: 'Comic Sans MS'}
		             ],
	       customClasses: [
		             {
				             name: 'quote',
				             class: 'quote',
				           },
		             {
				             name: 'redText',
				             class: 'redText'
				           },
		             {
				             name: 'titleText',
				             class: 'titleText',
				             tag: 'h1',
				           },
		           ],
	     uploadUrl: 'v1/image',
	     sanitize: true,
	     toolbarPosition: 'bottom',
	     toolbarHiddenButtons: [
		           ['bold', 'italic'],
		           ['fontSize']
		         ]
 };
	 
}
