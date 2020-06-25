import { Movie } from 'src/domain/movie';

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css'],
})
export class MovieTitleComponent {
  @Input()
  movie: Movie;

  @Output()
  titleClick: EventEmitter<Movie>;

  constructor() {
    this.titleClick = new EventEmitter();
  }

  onTitleClick(movie: Movie) {
    this.titleClick.emit(movie);
  }
}
