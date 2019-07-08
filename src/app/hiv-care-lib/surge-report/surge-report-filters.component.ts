import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import * as Moment from 'moment';

@Component({
  selector: "surge-report-filters",
  templateUrl: "./surge-report-filters.component.html",
  styleUrls: ["./surge-report-filters.component.css"]
})
export class SurgeReportFiltersComponent implements OnInit {
  public filterCollapsed: boolean;
  @Output()
  public startDateChange = new EventEmitter<Date>();
  @Output()
  public endDateChange = new EventEmitter<Date>();

  constructor() { }

  public get startDateString(): string {
    return this.startDate ? Moment(this.startDate).format("YYYY-MM-DD") : null;
  }
  public set startDateString(v: string) {
    this.startDate = new Date(v);
  }

  ngOnInit() { }

  private _startDate: Date;
  public get startDate(): Date {
    return this._startDate;
  }
  
  @Input()
  public set startDate(v: Date) {
    // console.log('changing date', v);
    this._startDate = v;
    this._month = v;
    this.startDateChange.emit(this.startDate);
  }
  private _month: Date;
  public get month(): Date {
    return this._month;
  }

  @Input()
  public set month(v: Date) {
    // console.log('changing date', v);
    this._month = v;
    this.startDate = Moment(this._month).startOf('month').toDate();
    this.endDate = Moment(this._month).endOf('month').toDate();
  }

  public get endDateString(): string {
    return this.endDate ? Moment(this.endDate).format('YYYY-MM-DD') : null;
  }

  public set endDateString(v: string) {
    this.endDate = new Date(v);
  }

  private _endDate: Date;
  public get endDate(): Date {
    return this._endDate;
  }

  @Input()
  public set endDate(v: Date) {
    this._endDate = v;
    this._month = v;
    this.endDateChange.emit(this.endDate);
  }

}
