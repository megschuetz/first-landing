import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-job-form',
  templateUrl: './first-job-form.component.html',
  styleUrls: ['./first-job-form.component.scss']
})
export class FirstJobFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(userStory: {}) {
    console.log(userStory)
  }

}
