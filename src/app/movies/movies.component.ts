import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/domain/movie';
import movies from 'src/assets/movies.json';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor() {
    this.movies = [];
  }

  ngOnInit(): void {
    this.movies = movies;
  }

  onTitleClick(movie: Movie): void {
    alert('Click on: ' + movie.title);
  }

  isYoungMovie(year: number): boolean {
    return year > 2000;
  }
}
