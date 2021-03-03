import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//httpclient
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoImagesPipe } from './pipes/no-images.pipe';
import { TarjetaSnipetComponent } from './components/tarjeta-snipet/tarjeta-snipet.component';
import { ArtistaComponent } from './components/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    PageNotFoundComponent,
    NoImagesPipe,
    TarjetaSnipetComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
