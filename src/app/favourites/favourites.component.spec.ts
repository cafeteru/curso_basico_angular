import { Movie } from 'src/domain/movie';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesService } from '../movies/movies.service';
import { FavouritesComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  const movieMock: Movie = {
    imdbID: '123',
    poster: '/',
    title: 'A sample title',
    type: 'safa',
    year: 2000
  };

  const moviesServiceMock = jasmine.createSpyObj('MoviesService',
    {}, { favouriteMovies: [movieMock] });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesComponent],
      providers: [{ provide: MoviesService, useValue: moviesServiceMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show at least a movie', () => {
    const favouriteMovies = fixture.nativeElement.querySelector('ul').children;
    expect(favouriteMovies.length).toBe(1);

    const movies = new Set(component.movies);
    movies.add({
      imdbID: '124',
      poster: '/',
      title: 'A sample title',
      type: 'safa',
      year: 2000
    });
    component.movies = movies;
    fixture.detectChanges();

    const newFavouriteMovies = fixture.nativeElement.querySelector('ul').children;
    expect(newFavouriteMovies.length).toBe(2);
  });

  it('should show movie title and year', () => {
    const favouriteMovieHtml = fixture.nativeElement.querySelector('li').innerHTML;
    expect(favouriteMovieHtml).toContain(movieMock.title);
    expect(favouriteMovieHtml).toContain(movieMock.year);
  });
});
