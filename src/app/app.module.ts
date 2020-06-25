import { OrderModule } from 'ngx-order-pipe';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { TableSuccessDirective } from './directives/table-success.directive';
import { FavouritesComponent } from './favourites/favourites.component';
import { HeaderComponent } from './header/header.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { MovieTitleComponent } from './movies/movie-title/movie-title.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImpressivePipe } from './pipes/impressive.pipe';

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
    DetailComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, OrderModule],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
