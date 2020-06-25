import { Injectable } from '@angular/core';
import { Movie } from 'src/domain/movie';
import { MovieDetail } from 'src/domain/movie-detail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  static API_URI = 'https://www.omdbapi.com';
  static API_KEY = 'b0930d45';

  movies: Movie[];
  favouriteMovies: Set<Movie>;

  constructor(private httpClient: HttpClient) {
    this.favouriteMovies = new Set();
  }

  saveFavouriteMovie(movie: Movie): void {
    this.favouriteMovies.add(movie);
  }

  deleteFavouriteMovie(movie: Movie): void {
    this.favouriteMovies.delete(movie);
  }

  search(searchTerm?: string): Observable<Movie[]> {
    if (!searchTerm) {
      searchTerm = 'Terminator';
    }
    return this.httpClient
      .get<any>(
        MoviesService.API_URI +
          '/?s=' +
          searchTerm +
          '&apiKey=' +
          MoviesService.API_KEY
      )
      .pipe(map((response) => this.convertToMovies(response.Search)));
  }

  private convertToMovies(movieList: any[]): Movie[] {
    if (movieList) {
      return movieList.map((movie) => {
        return {
          title: movie.Title,
          imdbID: movie.imdbID,
          poster: movie.Poster,
          type: movie.Type,
          year: movie.Year,
        };
      });
    }
    return null;
  }

  get(imdbID: string): Observable<MovieDetail> {
    return this.httpClient
      .get<any>(
        MoviesService.API_URI +
          '/?i=' +
          imdbID +
          '&apiKey=' +
          MoviesService.API_KEY
      )
      .pipe(map((response) => this.convertToMovieDetail(response)));
  }

  private convertToMovieDetail(movie: any): MovieDetail {
    return {
      title: movie.Title,
      imdbID: movie.imdbID,
      poster: movie.Poster,
      type: movie.Type,
      year: movie.Year,
      plot: movie.Plot,
      runtime: movie.Runtime,
    };
  }
}
