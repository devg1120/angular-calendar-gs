import { Component, OnInit, ChangeDetectorRef, ElementRef, Renderer } from '@angular/core';
declare var $: any; // JQuery

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {
  
  constructor(
    private cd: ChangeDetectorRef,
    private el: ElementRef,
    private renderer: Renderer
  ) {
    renderer.setElementAttribute(el.nativeElement, "class", "grid-stack-item");

  }

  public widgets: any[] = [
    {
      x: '0',
      y: '0',
      w: '4',
      h: '1',
      text: 'PieBar'
    },
    {
      x: '4',
      y: '0',
      w: '4',
      h: '4',
      text: 'PieBar'
    },
    {
      x: '12',
      y: '0' ,
      w: '4',
      h: '1',
      text: 'PieBar'
    },
    {
      x: '0',
      y: '2',
      w: '2',
      h: '2',
      text: 'PieBar'
    },
    {
      x: '8',
      y: '2',
      w: '4',
      h: '2',
      text: 'PieBar'
    },
    {
      x: '0',
      y: '0',
      w: '4',
      h: '1',
      text: 'PieBar'
    },
  ];

  ngOnInit() {
    let options = {
      cellHeight: 80,
      verticalMargin: 0
    };

    setTimeout(function () {
   $('.grid-stack').gridstack(options).on('dragstop', function(event, ui) {
	    
        let grid = this;
        let element = event.target;
      });;
	     
    }, 300);
    
    console.log('data init', this.widgets);

  }
  
  AddWidget() {

    let options = {
      cellHeight: 80,
      verticalMargin: 0
    };

    this.widgets.push({x: '0', y: '0', w: '4', h: '1', text: 'ad'});
    this.cd.detectChanges();
	  
    setTimeout(function () {
    let grids = $('.grid-stack').data('gridstack');
      grids.add_widget(this.widgets);
    }, 200);
	   
    console.log('data', this.widgets);
}

}
