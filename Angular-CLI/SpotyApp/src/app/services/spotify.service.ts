import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log("Servicio de Spotify listo")
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDgltOU120MHWE7d5y60tDdKAtW0g-nNEaa3LBJOjYFfh4JLojeY3Cpr5HFfRegY-MDvSTuZSmffdjQ6j0'
    }); 
    
    return this.http.get(url, {headers: headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20&offset=5').pipe( map( (data: any) => data['albums'].items ));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=MX`).pipe(map((data:any) => data['tracks']));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data:any) => data['artists'].items));
  }

}
