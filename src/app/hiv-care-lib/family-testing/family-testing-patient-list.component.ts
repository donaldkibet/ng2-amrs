import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { AgGridNg2 } from 'ag-grid-angular';
import * as rison from 'rison-node';

@Component({
  selector: 'family-testing-patient-list',
  templateUrl: './family-testing-patient-list.component.html',
  styleUrls: ['./family-testing-patient-list.component.css']
})
export class FamilyTestingPatientlistComponent implements OnInit {
  public hasLoadedAll: true;
  public hasError: false;
  public gridOptions: any = {
    columnDefs: []
  };
  @ViewChild('agGrid')
  public agGrid: AgGridNg2;
  @Input()
  public patientData = [];
  private columnDefs = [
    {
      headerName: '#',
      colId: 'rowNum',
      valueGetter: 'node.rowIndex + 1',
      width: 80,
      pinned: 'left'
    },
    {
      field: 'identifiers',
      headerName: 'Identifiers',
      pinned: 'left',
      cellRenderer: (column) => {
        return (
          '<a href="javascript:void(0);" title="Identifiers">' +
          column.value +
          '</a>'
        );
      }
    },
    { field: 'person_name', headerName: 'Person Name' },
    { field: 'person_id', headerName: 'Person Id' },
    { field: 'gender', headerName: 'Gender' },
    { field: 'age', headerName: 'Age' },
    { field: 'program_name', headerName: 'Program Name' },
    { field: 'phone_number', headerName: 'Phone Number' },
    { field: 'nearest_center', headerName: 'Nearest Center' },
    { field: 'family_count', headerName: 'Family Count' }
  ];
  public ngOnInit() {
    this.gridOptions.columnDefs = this.columnDefs;
    this.setCellSelection();
  }

  @Output()
  public patientSelected = new EventEmitter();

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public location: Location
  ) {}

  private setCellSelection(col?) {
    this.gridOptions.rowSelection = 'single';
    let selectedIndicator: any;
    this.gridOptions.onCellClicked = (e) => {
      if (e.rowPinned !== 'bottom') {
        selectedIndicator = {
          patient_id: e.data.person_id
        };
        this.patientSelected.emit(selectedIndicator);
      }
    };
  }
  public exportAllData() {
    this.agGrid.api.exportDataAsCsv();
  }
}
