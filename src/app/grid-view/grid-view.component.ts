import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../alumni.service';
import { IAlumni } from '../interfaces/alumni';
import { ColDef, GridApi } from 'ag-grid-community';
import { Grid } from '@ag-grid-community/all-modules';
import "ag-grid-enterprise";

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  public rowData: IAlumni[] = []

  constructor(private alumniService: AlumniService) { }

  ngOnInit(): void {
    this.alumniService.getAlumni()
      .subscribe(data => this.rowData = data)
  }

  columnDefs: ColDef[] = [
    { headerName: "Name", field: "name", sortable: true, filter: true},
    { headerName: "Status", field: "employed", sortable: true, filter: true, },
    { headerName: "Permanent", field: "permenent", sortable: true, filter: true},
    { headerName: "Title", field: "title", sortable: true, filter: true},
    { headerName: "Company", field: "company", sortable: true, filter: true},
    { headerName: "How", field: "effectiveChanel", sortable: true, filter: true}
  ]

  public gridApi: GridApi | undefined;

  onGridReady({ api } : { api: GridApi }) {
    this.gridApi = api;
    api.sizeColumnsToFit();
    api.setHeaderHeight(50)
  }

  public filters: string[] = []
  public filterObj: {[key: string]: any} = {}

  getFilters(): void {
  
    console.log(this.gridApi?.getFilterModel()["permenent"].values)
    this.filters = this.gridApi?.getFilterModel()["permenent"].values
  }
}
