import { Observable } from 'rxjs';
import { Movie } from 'src/domain/movie';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService.search();
  }

  onTitleClick(movie: Movie): void {
    this.router.navigate(['app', 'movie', movie.imdbID]);
  }

  isYoungMovie(year: number): boolean {
    return year > 2000;
  }

  saveFavorite(movie: Movie): void {
    this.moviesService.saveFavouriteMovie(movie);
  }

  deleteFavorite(movie: Movie): void {
    this.moviesService.deleteFavouriteMovie(movie);
  }

  onSearch(searchTerm: string): void {
    this.movies$ = this.moviesService.search(searchTerm);
  }
}
