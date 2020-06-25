import { MovieDetail } from 'src/domain/movie-detail';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  movie: MovieDetail;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.moviesService
      .get(this.activatedRoute.snapshot.params.imdbID)
      .subscribe((movieDetail) => (this.movie = movieDetail));
  }
}
