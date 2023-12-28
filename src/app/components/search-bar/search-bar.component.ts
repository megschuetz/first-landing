import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search: any;
  searchForm: FormGroup = new FormGroup({});
  @Output() passSearchTerm = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  emit(search: string) {
    this.passSearchTerm.emit(search);
  }

}
