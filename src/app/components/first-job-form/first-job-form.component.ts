import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-job-form',
  templateUrl: './first-job-form.component.html',
  styleUrls: ['./first-job-form.component.scss']
})
export class FirstJobFormComponent implements OnInit {
  jobStoryForm: FormGroup = new FormGroup({})

  constructor(private userStory: FormBuilder) { }

  ngOnInit(): void {
    this.jobStoryForm = this.userStory.group({
      cohort: [null, [Validators.required, Validators.minLength(4)]],
      program: [null, [Validators.required]],
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      permanent: [null, [Validators.required]],
      title: [null, [Validators.required, Validators.minLength(5)]],
      company: [null, [Validators.required, Validators.minLength(2)]],
      effectiveChanel: [null, [Validators.required]],
    })
  }

  submit(userStory:any) {
    console.log('here', userStory)
  }

  // validCohort(control: FormControl) {
  //   let validYear = ['17','18','19','20','21','22','23']
  //   let validMonth = ['01','02','03','04','05','06','07','08','09','10','11','12']

  //   let cohortInput = this.getCohort() 
  //   console.log(cohortInput)

  //   let year = cohortInput?.slice(2)
  //   let month = cohortInput?.slice(0,2)

  //   if (control.value != null && validYear.includes(year) && validMonth.includes(month)) {
  //     return {validCohort: true}
  //   }
  //   return null
  // }

  getCohort () { return this.jobStoryForm.get('cohort')}

}
