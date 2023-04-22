import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../alumni.service';
import { IAlumni } from '../interfaces/alumni';
import { ColDef, GridApi, GridOptions, SideBarDef } from 'ag-grid-community';
import { Grid } from '@ag-grid-community/all-modules';
import "ag-grid-enterprise";
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: 'grid-view.component.html',
  styleUrls: ['grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  public rowData: IAlumni[] = []

  constructor(private alumniService: AlumniService) {

  }

  ngOnInit(): void {
    this.alumniService.getAlumni()
      .subscribe(data => this.rowData = data)
  }

  columnDefs: ColDef[] = [
    { headerName: "Cohort", width:120, valueGetter: ({ data }) => `${data.cohort} ${data.program}`},
    { headerName: "Name", field:"name", },
    { headerName: "Status", field: "permanent", filter: false, width:100, cellRenderer: IconsComponent },
    { headerName: "Permanent", field: "permanent"},
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
    api.closeToolPanel();
    api.sizeColumnsToFit();
    api.setHeaderHeight(50);

    if(api.isToolPanelShowing()) {
      api.getToolPanelInstance('filters')?.expandFilters();
    }
  }

  public sideBar: SideBarDef | string | string[] | boolean | null = 'filters';

}