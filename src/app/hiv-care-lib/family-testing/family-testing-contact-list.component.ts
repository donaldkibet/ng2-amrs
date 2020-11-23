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
    { field: 'patient_id', headerName: 'Patient ID' },
    { field: 'family_member_name', headerName: 'Name' },
    { field: 'relationship_type', headerName: 'Relationship Type' },
    { field: 'age', headerName: 'Age' },
    { field: 'status', headerName: 'Status' }
  ];
  public ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.patientId = params.patient_id;
    });
    this.gridOptions.columnDefs = this.columnDefs;
    this.getFamilyTestingContactListData();
  }

  constructor(
    private familyTestingService: FamilyTestingService,
    public route: ActivatedRoute,
    public location: Location
  ) {}

  public getFamilyTestingContactListData() {
    this.isLoading = true;
    this.familyTestingService
      .getFamilyTestingReportDate(this.patientId)
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
