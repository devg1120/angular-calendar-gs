//import { Component, VERSION } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	  selector: 'app-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.scss']
})
//export class Example1Component {
export class AppComponent implements OnInit {

	  public widgets: any[] = [
		      {
			            top: 1,
			            left: 1,
			            height: 1,
			            width: 1,
			            text: 'Widget1'
			          },
		      {
			            top: 1,
			            left: 2,
			            height: 1,
			            width: 1,
			            text: 'Widget2'
			          },
		      {
			            top: 1,
			            left: 3,
			            height: 1,
			            width: 1,
			            text: 'Widget3'
			          },
		      {
			            top: 1,
			            left: 4,
			            height: 1,
			            width: 1,
			            text: 'Widget4'
			          },
		      {
			            top: 2,
			            left: 4,
			            height: 1,
			            width: 1,
			            text: 'Widget5'
			          },
		      {
			            top: 3,
			            left: 1,
			            height: 1,
			            width: 1,
			            text: 'Widget6'
			          }
		    ];

           ngOnInit() {
	            console.log("pnInit!!");
	    }
	  onWidgetChange(pos: any) {
		      console.log('position changed : ', pos);
		    }

}

/*

import { Component, OnInit, ViewChild } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxWidgetGridComponent, WidgetPositionChange } from 'ngx-widget-grid';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.scss']
           })
export class AppComponent implements OnInit {
  @ViewChild('grid', { static: true }) grid: NgxWidgetGridComponent;
  public rows = 6;
  public cols = 6;
  public widgets: any[] = [
    {
      top: 1,
      left: 1,
      height: 2,
      width: 2,
      color: this.generateHslaColors(),
      text: 'Hello'
    },
    {
      top: 3,
      left: 3,
      height: 1,
      width: 1,
      color: this.generateHslaColors(),
      text: 'Foo'
    }, {
      top: 4,
      left: 4,
      height: 2,
      width: 2,
      color: this.generateHslaColors(),
      text: 'Bar'
    }
  ];
  public swapWidgets = false;
  public showGrid = true;
  public highlightNextPosition = true;
  private _editable = true;
  public set editable(editable: boolean) {
    this._editable = editable;
    this.showGrid = editable;
  }

  public get editable() {
    return this._editable;
  }

  constructor() { }

  ngOnInit() {
	  console.log("pnInit!!");
  }

  toggleHighlight(doHighlight: boolean) {
    this.highlightNextPosition = !!doHighlight;
  }

  addWidget() {
    const nextPosition = this.grid.getNextPosition();
    if (nextPosition) {
      this.widgets.push({color: this.generateHslaColors(), ...nextPosition});
    } else {
      console.warn('No Space Available!! ');
    }
  }

  askDeleteWidget(index) {
    console.log('deleting', index);
    this.widgets.splice(index, 1);
  }

  deleteWidget() {
  }

  onWidgetChange(event: WidgetPositionChange) {
  }

  doRows(add: boolean) {
    if (add) {
      this.rows++;
    } else {
      if (this.rows > 1) {
        this.rows--;
      }
    }
  }

  doCols(add: boolean) {
    if (add) {
      this.cols++;
    } else {
      if (this.cols > 1) {
        this.cols--;
      }
    }
  }

  generateHslaColors(saturation?, lightness?, alpha?) {
    const h = this.getRandomIntInclusive(0, 360 * 10);
    const s = saturation >= 0 && saturation <= 100 ? saturation : 80;
    const l = lightness >= 0 && lightness <= 100 ? lightness : 80;
    const a = alpha >= 0 && alpha <= 100 ? alpha : 100;
    return `hsla(${h / 10},${s}%,${l}%,${a})`;
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
    return random;
  }

  public onGridFull(e) {
    console.log(e);
  }
}
*/