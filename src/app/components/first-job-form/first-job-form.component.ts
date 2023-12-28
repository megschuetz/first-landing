import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReviewModalComponent } from '../review-modal/review-modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-first-job-form',
  templateUrl: './first-job-form.component.html',
  styleUrls: ['./first-job-form.component.scss']
})

export class FirstJobFormComponent implements OnInit {
  public months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  public salaries = ['50k - 60k', '60k - 70k', '70k - 80k', '80k - 90k', '90k - 100k', '100k +'];
  jobStoryForm: FormGroup = new FormGroup({})

  constructor(
    private userStory: FormBuilder, 
    public matdialog: MatDialog, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.jobStoryForm = this.userStory.group({
      cohort: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4), this.validCohort]],
      program: [null, [Validators.required]],
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      permanent: [null, [Validators.required]],
      title: [null, [ Validators.minLength(5)]],
      company: [null, [Validators.minLength(2)]],
      effectiveChanel: [null, [Validators.required]],
      monthHired: [null, [Validators.required]],
      startingSalary: [null, [Validators.required]],
      storyResponse: [null, [Validators.required]],
    })
  }

  validCohort (control: AbstractControl): ValidationErrors | null  {
    const validYear = ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    const validMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    const cohortInput = control.value;

    if (cohortInput?.length === 4) {
      const year = cohortInput.slice(0, 2);
      const month = cohortInput.slice(2);

      if (validYear.includes(year) && validMonth.includes(month)) {
        return null; 
      }
    }
    return { invalidCohort: true }; 
  };

  getCohort(): AbstractControl | null { return this.jobStoryForm.get('cohort')}

  submitForm() {
    const dialogRef = this.matdialog.open(ReviewModalComponent, {
      width: '40%',
      height: '80%',
      data: this.jobStoryForm.value
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.router.navigate(['feed']);
    });
  };

}
