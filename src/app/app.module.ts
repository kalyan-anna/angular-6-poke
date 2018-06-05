import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import {HttpClientModule} from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ThumbnailComponent,
    PaginatorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
