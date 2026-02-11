import { Component, OnInit, Input } from '@angular/core';
import { IAlumni } from 'src/app/interfaces/alumni';

@Component({
  selector: 'app-stories-feed',
  templateUrl: './stories-feed.component.html',
  styleUrls: ['./stories-feed.component.scss'],
  standalone: false,
})
export class StoriesFeedComponent implements OnInit {
  @Input() allStories: IAlumni[] = [];
  @Input() searchTerm: string = '';

  constructor() {}

  ngOnInit() {}
}
