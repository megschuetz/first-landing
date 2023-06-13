import { Component, OnInit } from '@angular/core';
import { IAlumni } from '../../interfaces/alumni';
import { AlumniService } from '../../alumni.service';

@Component({
  selector: 'app-stories-feed',
  templateUrl: './stories-feed.component.html',
  styleUrls: ['./stories-feed.component.scss']
})
export class StoriesFeedComponent implements OnInit {

  public allStories: IAlumni[] = [];
  public isLoading: boolean = true;
  
  constructor(private alumniService: AlumniService) { }

  ngOnInit(): void { 
      this.alumniService.getAlumni()
        .subscribe(data => {
          this.allStories = data
          this.isLoading = false
        })
  }

}
