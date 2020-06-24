import {
  Component,
  OnInit,
} from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { Movie } from 'src/domain/movie';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  movies: Set<Movie>;

  constructor(private moviesService: MoviesService) {
    this.movies = new Set();
  }

  ngOnInit(): void {
    this.movies = this.moviesService.favouriteMovies;
  }
}
