import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  

  //inyectamos una variable
  constructor(private router: Router, private heroesService: HeroesService) { }

  //traer la informacion 
  ngOnInit(): void {

    this.heroes=this.heroesService.getHeroes();
    console.log(this.heroes);

  }

  verHeroe(index: number) {
    console.log("Boton presionado" + index);
    this.router.navigate( ['/heroe', index] );

  }

}
