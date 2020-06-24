import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { TableSuccessDirective } from './directives/table-success.directive';
import { ImpressivePipe } from './pipes/impressive.pipe';
import { MovieTitleComponent } from './movie-title/movie-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    ImpressivePipe,
    TableSuccessDirective,
    MovieTitleComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
