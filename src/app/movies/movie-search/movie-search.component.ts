import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit {
  @Output()
  search: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any): void {
    this.search.emit(form.value.searchTerm);
  }
}
