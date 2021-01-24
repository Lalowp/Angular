import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent implements OnInit {

  @Input() items:any[] = [];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  verArtista(item:any){
    let artista;
    if(item.type === 'artist'){
      artista = item.id;
    }else{
      artista = item.artists[0].id;
    }

    this.route.navigate(['/artist', artista]);
  }

}
