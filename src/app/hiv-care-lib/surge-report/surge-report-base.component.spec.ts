import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeReportBaseComponent } from './surge-report-base.component';

describe('SurgeReportBaseComponent', () => {
  let component: SurgeReportBaseComponent;
  let fixture: ComponentFixture<SurgeReportBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeReportBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeReportBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
