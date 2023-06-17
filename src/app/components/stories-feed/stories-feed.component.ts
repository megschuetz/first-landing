import { Component, OnInit, Input } from '@angular/core';
import { IAlumni } from 'src/app/interfaces/alumni';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';

@Component({
  selector: 'app-stories-feed',
  templateUrl: './stories-feed.component.html',
  styleUrls: ['./stories-feed.component.scss']
})
export class StoriesFeedComponent implements OnInit  {
  @Input() allStories: IAlumni[] = [];
  @Input() searchTerm: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.searchTerm)
  }
}
