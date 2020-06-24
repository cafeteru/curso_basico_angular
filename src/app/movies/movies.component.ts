import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/domain/movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) {
    this.movies = [];
  }

  ngOnInit(): void {
    this.moviesService.search().subscribe((movies) => (this.movies = movies));
  }

  onTitleClick(movie: Movie): void {
    alert('Click on: ' + movie.title);
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
    this.moviesService
      .search(searchTerm)
      .subscribe((movies) => (this.movies = movies));
  }
}
