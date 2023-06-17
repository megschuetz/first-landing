import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlumni } from 'src/app/interfaces/alumni';
import { Router } from '@angular/router';

@Component({
  selector: 'app-key-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss']
})
export class ReviewModalComponent implements OnInit {

  formInfo!: IAlumni;
  
  constructor(
    public dialogRef: MatDialogRef<ReviewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }


  ngOnInit(): void {
    this.formInfo = this.data
  }

  async onClose() {
   this.dialogRef.close()
   await this.router.navigate(['feed'])
  }

}
