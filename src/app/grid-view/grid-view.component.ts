import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../alumni.service';
import { IAlumni } from '../interfaces/alumni';
import { ColDef, GridApi, SideBarDef } from 'ag-grid-community';
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
//valueGetter: ({ data }) => `${data.name} is a ${data.title}`
  columnDefs: ColDef[] = [
    { headerName: "Cohort", field: "cohort"},
    { headerName: "Name", field:"name", },
    { headerName: "Status", field: "employed", },
    { headerName: "Permanent", field: "permenent"},
    { headerName: "Title", field: "title"},
    { headerName: "Company", field: "company"},
    { headerName: "How", field: "effectiveChanel"},
  ]

  defaultColDef: ColDef = {
    sortable: true,
    filter:'agSetColumnFilter',
    resizable: true,
  }

  public gridApi: GridApi | undefined;

  onGridReady({ api } : { api: GridApi }) {
    this.gridApi = api;
    api.sizeColumnsToFit();
    api.setHeaderHeight(50);
    api.closeToolPanel()

    if(api.isToolPanelShowing()) {
      api.getToolPanelInstance('filters')?.expandFilters();
    }
  }

  public sideBar: SideBarDef | string | string[] | boolean | null = 'filters';

  // public filters: string[] = []
  // public filterObj: {[key: string]: any} | undefined = {}

  // getFilters(): void {
  
  //   this.filterObj = this.gridApi?.getFilterModel()
    
  //   console.log(this.columnDefs)
  //   this.filters = this.gridApi?.getFilterModel()['permenent'].values
  // }
}
