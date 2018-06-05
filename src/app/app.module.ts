import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonGalleryComponent } from './components/pokemon-gallery/pokemon-gallery.component';
import { PokemonThumbnailComponent } from './components/pokemon-thumbnail/pokemon-thumbnail.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonGalleryComponent,
    PokemonThumbnailComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
