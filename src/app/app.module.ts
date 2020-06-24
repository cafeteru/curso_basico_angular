import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { TableSuccessDirective } from './directives/table-success.directive';
import { ImpressivePipe } from './pipes/impressive.pipe';
import { MovieTitleComponent } from './movies/movie-title/movie-title.component';
import { MoviesService } from './movies/movies.service';
import { FavouritesComponent } from './favourites/favourites.component';
import { FormsModule } from '@angular/forms';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    ImpressivePipe,
    TableSuccessDirective,
    MovieTitleComponent,
    FavouritesComponent,
    MovieSearchComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
