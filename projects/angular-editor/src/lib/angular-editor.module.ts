import {NgModule} from '@angular/core';
import {AngularEditorComponent} from './angular-editor.component';
import {AngularEditorToolbarComponent} from './angular-editor-toolbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AeSelectComponent } from './ae-select/ae-select.component';
import { FullpageDirective } from './fullpage.directive';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent, FullpageDirective],
  exports: [AngularEditorComponent, AngularEditorToolbarComponent]
})
export class AngularEditorModule {
}
