import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'surge-report-tabular',
  templateUrl: './surge-report-tabular.component.html',
  styleUrls: ['./surge-report-tabular.component.css']
})
export class SurgeReportTabularComponent implements OnInit {

  @Input() public isReleased:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
