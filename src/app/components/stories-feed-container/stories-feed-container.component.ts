import { Component, OnInit, ViewChild } from '@angular/core';
import { IAlumni } from '../../interfaces/alumni';
import { AlumniService } from '../../alumni.service';

@Component({
  selector: 'app-stories-feed-container',
  templateUrl: './stories-feed-container.component.html',
  styleUrls: ['./stories-feed-container.component.scss']
})

export class StoriesFeedContainerComponent implements OnInit {

  public allStories: IAlumni[] = [];
  public isLoading: boolean = true;
  public searchTerm: string = '';
  
  constructor(private alumniService: AlumniService) { }

  ngOnInit(): void { 
    setTimeout(() => {
      this.alumniService.getAlumni()
        .subscribe(data => {
          data.forEach(alum => this.allStories.push(alum))
          
        })  
        this.alumniService.getAddedAlumni().forEach((alum: IAlumni) => {
          this.allStories.push(alum)
        })
        this.isLoading = false
    }, 500)
  }

  setSearchTerm(event: any) {
    this.searchTerm = event
  }

}
