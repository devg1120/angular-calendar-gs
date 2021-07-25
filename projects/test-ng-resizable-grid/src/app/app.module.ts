import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GridStackModule } from 'ng4-gridstack';

import { NgxWidgetGridModule } from 'ngx-widget-grid';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

import { GridStackDirective } from './example2/grid-stack.directive';
import { GridStackItemDirective } from './example2/grid-stack-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    GridStackDirective,
    GridStackItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridStackModule,
    NgxWidgetGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
