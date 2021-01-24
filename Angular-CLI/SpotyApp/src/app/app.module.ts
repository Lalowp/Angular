import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { SearchComponent } from './component/shared/search/search.component';

//Rutas
import {ROUTES} from './app.routes'; 

//Modulos
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ArtistsComponent } from './components/artists/artists.component';
import { UrlSeguraPipe } from './pipes/url-segura.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MultiInputComponent } from './components/multi-input/multi-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    TarjetasComponent,
    NoimagePipe,
    ArtistsComponent,
    UrlSeguraPipe,
    LoadingComponent,
    MultiInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
