import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeReportFiltersComponent } from './surge-report-filters.component';

describe('SurgeReportFiltersComponent', () => {
  let component: SurgeReportFiltersComponent;
  let fixture: ComponentFixture<SurgeReportFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeReportFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeReportFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
