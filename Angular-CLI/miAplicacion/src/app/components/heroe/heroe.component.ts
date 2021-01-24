import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  heroe: any = {};

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })
 

  }

}
