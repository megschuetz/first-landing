import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';


@Component({
  selector: 'app-icons',
  template:`
    <section>
      <div *ngIf="employee" class="icon">
        <img src='../assets/rocket.png'>
      </div>
      <div *ngIf="apprenticeship || internship" class="icon">
        <img src='../assets/run.png'>
      </div>
    </section>

  `,
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements ICellRendererAngularComp {

  public employee: boolean = false
  public internship: boolean = false
  public apprenticeship: boolean = false

  refresh(params: ICellRendererParams) {
    return false;
  }

  agInit(params: ICellRendererParams): void {
    if(params.value === 'Internship') {
      this.internship = true
    } else if (params.value === 'Apprenticeship') {
      this.apprenticeship = true
    } else if (params.value === 'Employee') {
      this.employee = true
    }
  }

}
