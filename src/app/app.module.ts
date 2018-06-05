import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonGalleryComponent } from './components/pokemon-gallery/pokemon-gallery.component';
import { PokemonThumbnailComponent } from './components/pokemon-thumbnail/pokemon-thumbnail.component';
import {HttpClientModule} from '@angular/common/http';
import { PokemonPaginatorComponent } from './components/pokemon-paginator/pokemon-paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonGalleryComponent,
    PokemonThumbnailComponent,
    PokemonPaginatorComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
