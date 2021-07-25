import { Component, OnInit , AfterViewInit, AfterViewChecked, ElementRef, ViewEncapsulation } from '@angular/core';
//import * as jexcel_ from "jexcel";
import  jexcel from "jexcel";
import Spreadsheet from "x-data-spreadsheet";


//const jexcel = jexcel_;

@Component({
  selector: 'angular-spreadsheet',
  template: `
          <div id="spreadsheet" class="spreadsheet"></div>
  `,
  
  styleUrls: [
  './angular-spreadsheet.component.scss',
  ],
  
  //encapsulation: ViewEncapsulation.None
  //encapsulation: ViewEncapsulation.ShadowDom
  
})

export class AngularSpreadsheetComponent implements OnInit ,AfterViewInit{

  title = "CodeSandbox";

  xs : any;

  //  @ViewChild('spreadsheetId', {static: false})
  // spreadsheetIdentifier: ElementRef;

  constructor(private el:ElementRef) {
  }

  
  ngOnInit() {
  }

  ngAfterViewInit() {
  /*
    jexcel(document.getElementById("jexcel"), {
      data: [[]],
      columns: [
        { type: "dropdown", width: "100px", source: ["Y", "N"] },
        { type: "color", width: "100px", render: "square" }
      ],
      minDimensions: [10, 10]
    });
    */
    
    //console.dir("el:",this);
    //console.dir("parent:",this.el.nativeElement.parentNode.parentNode.parentNode);
    //console.log(this.el.nativeElement.offsetHeight);
    //       console.log(this.el.nativeElement.offsetWidth);
    //        console.log(this.el.nativeElement.parentNode.clientHeight);
    //        console.log(this.el.nativeElement.parentNode.clientWidth);
  //var xs = Spreadsheet.x.spreadsheet('#spreadsheet', {showToolbar: true, showGrid: true})
	  this.xs = new Spreadsheet('#spreadsheet', {showToolbar: true, showGrid: true
	  //this.xs = new Spreadsheet('angular-spreadsheet', {showToolbar: true, showGrid: true
		  
		  ,
          view: {
		  //height: () => document.documentElement.clientHeight,
		  //width: () => document.documentElement.clientWidth,
                  height: () => {return 500},
                  width: () => {return 700},
                  //width: () => this.el.nativeElement.offsetWidth,
                  //height: () => this.el.nativeElement.offsetHeight,
                  //width: () => this.el.nativeElement.offsetWidth,
          //height: () => this.el.nativeElement.parentNode.parentNode.parentNode.offsetHeight,
          //width: () => this.el.nativeElement.parentNode.parentNode.parentNode.offsetWidth,
          //height: () => this.el.nativeElement.parentNode.parentNode.parentNode.parentNode.clientHeight,
          //width: () => this.el.nativeElement.parentNode.parentNode.parentNode.parentNode.clientWidth,
		  // height: () => this.el.nativeElement.clientHeight,
		  //width: () => this.el.nativeElement.clientWidth,
                }
		   
        })
        .loadData([{
          freeze: 'B3',
          styles: [
            {
              bgcolor: '#f4f5f8',
              textwrap: true,
              color: '#900b09',
              border: {
                top: ['thin', '#0366d6'],
                bottom: ['thin', '#0366d6'],
                right: ['thin', '#0366d6'],
                left: ['thin', '#0366d6'],
              },
            },
          ],
          merges: [
            'C3:D4',
          ],
          rows: {
            1: {
              cells: {
                0: { text: 'testingtesttestetst' },
                2: { text: 'testing' },
              },
            },
            2: {
              cells: {
                0: { text: 'render', style: 0 },
                1: { text: 'Hello' },
                2: { text: 'haha', merge: [1, 1] },
              }
            },
            8: {
              cells: {
                8: { text: 'border test', style: 0 },
              }
            }
          },
        }]).change((cdata) => {
          // console.log(cdata);
          console.log(this.xs.getData());
        });
    
        //console.dir('xs:',xs);
        //xs.sheet.reload();
        //xs.change({});
        //xs.validate();
        //console.dir("size", xs.sheet);
        //console.dir("size", xs.sheet.el.el.clientWidth);
        //console.dir("size", xs.sheet.el.el.clientHeight);
        //console.log("size", xs.sheet.tableEl);
   }

  ngAfterViewChecked() {
	  console.log("height",this.el.nativeElement.parentNode.parentNode.parentNode.offsetHeight);
	  console.log("wifth",this.el.nativeElement.offsetWidth);

	  // console.log("width",this.el.nativeElement.parentNode.clientHeight);
	  //console.log("height",this.el.nativeElement.parentNode.clientHeight);
  }
}
