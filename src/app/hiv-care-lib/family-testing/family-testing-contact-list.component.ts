import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FamilyTestingService } from 'src/app/etl-api/family-testing-resource.service';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'family-testing-contact-list',
  templateUrl: './family-testing-contact-list.component.html',
  styleUrls: ['./family-testing-contact-list.component.css']
})
export class FamilyTestingContactComponent implements OnInit {
  public isLoading: boolean;
  public showInfoMessage: boolean;
  public errorMessage: string;
  public familyTestingContactList: Array<any> = [];
  private patientId;
  public gridOptions: any = {
    columnDefs: []
  };
  @ViewChild('agGrid')
  public agGrid: AgGridNg2;

  public displayFamilyTree = true;

  private columnDefs = [
    {
      headerName: '#',
      colId: 'rowNum',
      valueGetter: 'node.rowIndex + 1',
      width: 80,
      pinned: 'left'
    },
    { field: 'fm_name', headerName: 'Name' },
    { field: 'fm_age', headerName: 'Age' },
    { field: 'fm_gender', headerName: 'Gender' },
    { field: 'fm_phone', headerName: 'Contacts' },
    { field: 'relationship_type', headerName: 'Relation' },
    { field: 'fm_status', headerName: 'HIV status' },
    { field: 'reported_test_date', headerName: 'HIV test date' },
    { field: 'in_care', headerName: 'In care' },
    { field: 'ccc_number', headerName: 'CCC number' },
    { field: 'nearest_center', headerName: 'Nearest Center' }
  ];
  public ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.getFamilyTestingContactListData(params.patient_id);
    });
    this.gridOptions.columnDefs = this.columnDefs;
  }

  constructor(
    private familyTestingService: FamilyTestingService,
    public route: ActivatedRoute,
    public location: Location
  ) {}

  public getFamilyTestingContactListData(patientId: string) {
    this.isLoading = true;
    this.familyTestingService
      .getFamilyTestingReportDate(patientId)
      .subscribe((data) => {
        if (data.error) {
          this.showInfoMessage = true;
          this.errorMessage = `There has been an error while loading the report, please retry again`;
          this.isLoading = false;
        } else {
          this.showInfoMessage = false;
          this.isLoading = false;
          this.familyTestingContactList = data.result;
        }
      });
  }

  public goBack() {
    this.location.back();
  }

  public exportAllData() {
    this.agGrid.api.exportDataAsCsv();
  }

  public toggleTreeView() {
    this.displayFamilyTree = !this.displayFamilyTree;
  }
}
