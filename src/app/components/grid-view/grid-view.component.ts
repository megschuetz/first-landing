import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../../alumni.service';
import { IAlumni } from '../../interfaces/alumni';
import { ColDef, GridApi, GridOptions, SideBarDef } from 'ag-grid-community';
import { Grid } from '@ag-grid-community/all-modules';
import "ag-grid-enterprise";
import { IconsComponent } from '../../icons/icons.component';
import { lastValueFrom } from 'rxjs';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-grid-view',
  templateUrl: 'grid-view.component.html',
  styleUrls: ['grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  public rowData: IAlumni[] = []
  public loading: boolean = true;
  public storyToDisplay: any = {};

  constructor(private alumniService: AlumniService) {

  }

  async ngOnInit() {
    const currentAlumni = await lastValueFrom(this.alumniService.getAlumni())
    currentAlumni.forEach(alumni => this.rowData.push(alumni))
    this.alumniService.getAddedAlumni().forEach(alum => this.rowData.push(alum))
    this.storyToDisplay = this.rowData[0]
    this.loading = false;
  }

  columnDefs: ColDef[] = [
    { headerName: "Cohort", width:120, valueGetter: ({ data }) => `${data.cohort} ${data.program}`},
    { headerName: "Name", valueGetter: ({ data }) => `${data.firstName} ${data.lastName}` },
    { headerName: "Status", field: "permanent", filter: false, width:100, cellRenderer: IconsComponent },
    { headerName: "Permanent", field: "permanent"},
    { headerName: "Title", field: "title"},
    { headerName: "Company", field: "company"},
    { headerName: "How", field: "effectiveChanel"},
    { headerName: "Month Hired", field: "monthHired"},
    { headerName: "Salary", field: "startingSalary"},
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

  onRowClicked(event: any) {
    this.storyToDisplay = event.data
  }
}
