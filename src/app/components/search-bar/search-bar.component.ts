import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  search: any;
  searchForm: FormGroup = new FormGroup({});
  @Output() setSearchTerm = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: '',
    })
  }

  emit(search: string) {
    this.setSearchTerm.emit(search)
  }

}
