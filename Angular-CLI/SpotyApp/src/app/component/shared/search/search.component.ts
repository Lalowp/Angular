import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean = false;
  error: boolean = false;
  mensajeError: string = "";

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.loading = true; 
    this.spotifyService.getArtistas(termino).subscribe((data:any) => {
      this.artistas = data; 
      this.loading = false; 
      this.error = false;
    },((errorServicio:any) => {
      this.loading=false;
      this.error=true;
      this.artistas = [];
      this.mensajeError = errorServicio.error.error.message;
    }));
  }

}
