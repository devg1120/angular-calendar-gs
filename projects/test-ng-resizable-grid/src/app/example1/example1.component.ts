import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component {

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

  onWidgetChange(pos: any) {
    console.log('position changed : ', pos);
  }

}
