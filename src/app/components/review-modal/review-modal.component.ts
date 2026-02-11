import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumniService } from 'src/app/alumni.service';

@Component({
  selector: 'app-key-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
  standalone: false,
})
export class ReviewModalComponent implements OnInit {
  formInfo!: any;

  constructor(
    public dialogRef: MatDialogRef<ReviewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alumniService: AlumniService,
  ) {}

  ngOnInit(): void {
    this.formInfo = this.data;
  }

  onClose() {
    this.dialogRef.close(true);
    this.alumniService.setAlumni(this.formInfo);
  }
}
