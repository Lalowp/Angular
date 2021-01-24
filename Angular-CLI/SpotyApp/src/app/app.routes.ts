import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/shared/search/search.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { MultiInputComponent } from './components/multi-input/multi-input.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:id', component: ArtistsComponent},
    {path : 'multiInput',component: MultiInputComponent},
    {path: '**', pathMatch: 'full', component: HomeComponent},
    {path: '', pathMatch: 'full', component:HomeComponent}
];