import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styles: [
  ]
})
export class ArtistsComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {

    this.router.params.subscribe( params => {
      this.getArtista(params['id']); 
      this.getTopTracks(params['id']);
    })

  }

  getArtista(id: string){
    this.spotifyService.getArtista(id)
    .subscribe( artistaServ =>{
      this.artista = artistaServ;
    })

  }

  getTopTracks(id: string){
    this.spotifyService.getTopTracks(id)
    .subscribe(tTracks =>{
      this.topTracks = tTracks;
    })
  }


  ngOnInit(): void {
  }

}
