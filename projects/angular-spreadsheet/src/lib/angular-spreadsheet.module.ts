import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { AngularSpreadsheetComponent } from './angular-spreadsheet.component';



@NgModule({
  declarations: [AngularSpreadsheetComponent],
  imports: [   BrowserModule
  ],
  exports: [AngularSpreadsheetComponent]
})
export class AngularSpreadsheetModule { }
