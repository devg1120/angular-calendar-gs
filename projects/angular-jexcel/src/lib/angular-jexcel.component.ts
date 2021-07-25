import { Component, OnInit } from '@angular/core';
import  jexcel from "jexcel";

@Component({
  selector: 'angular-jexcel',
  template: `
    <div id="jexcel"></div>
  `,
  styles: []
})
export class AngularJexcelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     jexcel(document.getElementById("jexcel"), {
	           data: [[]],
	           columns: [
			           { type: "dropdown", width: "100px", source: ["Y", "N"] },
			           { type: "color", width: "100px", render: "square" }
			         ],
	           minDimensions: [10, 10]
	         });

  }

}
