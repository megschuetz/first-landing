import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  search: any;
  searchForm: UntypedFormGroup = new UntypedFormGroup({});
  @Output() passSearchTerm = new EventEmitter<string>();

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  emit(search: string) {
    this.passSearchTerm.emit(search);
  }
}
