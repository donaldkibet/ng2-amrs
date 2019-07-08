import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeReportTabularComponent } from './surge-report-tabular.component';

describe('SurgeReportTabularComponent', () => {
  let component: SurgeReportTabularComponent;
  let fixture: ComponentFixture<SurgeReportTabularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeReportTabularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeReportTabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
