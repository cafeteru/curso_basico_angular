import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onSubmit(form: NgForm): void {
    this.search.emit(form.value.searchTerm);
  }
}
