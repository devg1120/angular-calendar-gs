import {Component,  OnInit, OnDestroy} from '@angular/core';

import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

//import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularEditorModule } from '@gs/angular-editor';
//import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularEditorConfig } from '@gs/angular-editor';

//import {TagifyService} from '@gs/angular-tagify';

import { AngularSpreadsheetModule } from 'angular-spreadsheet';



@Component({
  selector: 'mwl-calendar-open-day-memo',
  //encapsulation: ViewEncapsulation.None,
	//  templateUrl: './app.component.html',
	template: `
          <style>
/*
	        .base {
		     width: 100%;

		}
	*/	  
                  ._nav-tabs {
			  //background-color: blue;
		          height: 20px;
		     padding : 0px;
		     margin : 0px;
		     width: 100%;
		  }
                  .nav-item {
		          height: 20px;
		     padding : 0px;
		     margin : 0px;
		  }
                  .nav-title {
		     padding : 0px 10px 0px 10px;
		     margin : 0px;
		     font: 10px arial, sans-serif;
		  }
/*
                  .outlet {
   height: '15rem';

                  }
*/
		  .nav-content {
		     width: 100%;
   //height:200px,
   //height: '15rem',
		  }
		  .memo-view {
      margin-top: 5px;
      padding: 0.5rem 0.8rem 1rem 0.8rem;
      border: 1px solid #ddd;
   //border:  solid 0.5px #C0C0C0;
   height: 300px;
                     margin-top: 15;
		     //padding : 10px 10px 10px 17px;
                     overflow-y: scroll;

		  }
		  .memo-source {
      margin-top: 5px;
      padding: 0.5rem 0.8rem 1rem 0.8rem;
      border: 1px solid #ddd;
   //border:  solid 0.5px #C0C0C0;
			 //font-size: 0.8em;
			  font: 10px arial, sans-serif;
		  }
		  
                 .memo-editor {
		     margin : 0;
		     padding : 0;

                 }

                 .memo-sheet{
		 //display:block;
		     //width: auto;
		     //height: auto;
		     margin : 0;
		     padding : 0;
                 }

                 .tagify-panel {
                    width: 500px;
                    height: 200px;

                 }

	  </style>
<!--
<div [ngbNavOutlet]="nav" class="mt-2"></div>
-->
<!--
<div  class="tagify-panel">
    testing tagify
      <tagify  [settings]="settings"
                  (add)="onAdd($event)"
                            (remove)="onRemove($event)">

                              </tagify>
                                <button (click)="clearTags()">clear</button>
                                  <button (click)="addTags()">add Tags</button>
                                </div>
-->
<div class="base">
<ul ngbNav #nav="ngbNav" class="_nav-tabs">
<!--
  <li [ngbNavItem]="1" class="nav-item">
        <a ngbNavLink class="nav-title">TAGIFY</a>
                <ng-template ngbNavContent let-active>
                  <div>
                      testing tagify
                        <tagify [settings]="settings"
                                    (add)="onAdd($event)"
                                              (remove)="onRemove($event)">

                                                </tagify>
                                                  <button (click)="clearTags()">clear</button>
                                                    <button (click)="addTags()">add Tags</button>
                                                  </div>
                </ng-template>
  </li>
-->
  <li [ngbNavItem]="2" class="nav-item">
        <a ngbNavLink class="nav-title">VIEW</a>
                <ng-template ngbNavContent let-active>
                <div class="nav-content">
                    <div class="memo-view" >
                      <!--
                    <div  [innerHTML]='htmlContent'></div>
                    -->
                    <div  [innerHTML]='safeHtml'></div>
                   </div>
                </div>
                </ng-template>
  </li>
  <li [ngbNavItem]="3" class="nav-item">
      <a ngbNavLink class="nav-title" >EDIT</a>
                <ng-template ngbNavContent >
	        <div class="nav-content">
                      <angular-editor  class="memo-editor"
	                      [(ngModel)]="htmlContent"
		              [config]="editorConfig"
		              (ngModelChange)="onChange($event)"
                      >
		      </angular-editor>
		</div>
                    <div  [innerHTML]='safeHtml'></div>
	        </ng-template>

  </li>
  <li [ngbNavItem]="4" class="nav-item">
        <a ngbNavLink class="nav-title">SOURCE</a>
	        <ng-template ngbNavContent >
	        <div class="nav-content" class="memo-source">
                  <!--
		    {{ htmlContent }}
                    -->
		    {{ safeHtml }}
		</div>
	        </ng-template>
  </li>
  <li [ngbNavItem]="5" class="nav-item">
        <a ngbNavLink class="nav-title">SHEEL</a>
               <ng-template ngbNavContent >
               <div class="nav-content">
                  <angular-spreadsheet class="memo-sheet"></angular-spreadsheet>
               </div>
         </ng-template>
     </li>
  <li [ngbNavItem]="6" class="nav-item">
        <a ngbNavLink class="nav-title">EXCEL</a>
               <ng-template ngbNavContent >
               <div class="nav-content" class="memo-sheet">
                  <angular-jexcel></angular-jexcel>
               </div>
         </ng-template>
     </li>
  </ul>
  
  <div [ngbNavOutlet]="nav" class="outlet"></div>
 

  </div>
        `,
    //styleUrls: ['./app.component.scss']
	//	styles: ['ngb-tab { font-weight: normal; }']
})
export class CalendarOpenDayMemoComponent implements OnInit {
   safeHtml: SafeHtml;
  title = 'app';

	//	form: FormGroup;

	htmlContent = '';

	editorConfig: AngularEditorConfig = {
		    editable: true,
		      spellcheck: false,
		     // height: 'auto',
		     // maxHeight: 'auto',
    height: '15rem',
    minHeight: '5rem',
		width: 'auto',
		      translate: 'yes',
		      enableToolbar: true,
		      showToolbar: true,
		      placeholder: 'Enter text here...',
		      defaultParagraphSeparator: '',
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '3',
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
//		    uploadUrl: 'v1/image',
		    sanitize: false,
                    //toolbarPosition: 'bottom',
		    toolbarPosition: 'top',
                    /*
		    toolbarHiddenButtons: [
			          ['bold', 'italic'],
			          ['fontSize']
			        ]
                                */
	};
	//constructor() {}
	//constructor(private formBuilder: FormBuilder) {}
        //constructor() {}
   constructor(private sanitizer: DomSanitizer){}

   public settings = { blacklist: ['fucking', 'shit']};

   //transformYourHtml(htmlTextWithStyle) {
   //transform(htmlTextWithStyle) {
   // return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
   // }

  ngOnInit() {
	  /* 
    this.form = this.formBuilder.group({
      signature: ['', Validators.required]
    });
	   */
	  // console.log(this.htmlContent);
	  this.htmlContent = `
	     <h1>GO</h1>
	     `;
   this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.htmlContent);
  }

  onChange(event) {
    console.log('changed');
    //console.log(this.htmlContent);
   this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.htmlContent);
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  onChange2(event) {
	  //console.warn(this.form.value);
  }


}
