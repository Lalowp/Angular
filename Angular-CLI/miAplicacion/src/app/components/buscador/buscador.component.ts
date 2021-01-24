import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []; 
  termino!: string;

  constructor(private router: Router, private heroesServicio: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      console.log("Termino = "+this.termino); 
      this.heroes = this.heroesServicio.buscarHeroe(this.termino);
    });
  }

  verHeroe(index: number) {
    console.log("Boton presionado" + index);
    this.router.navigate( ['/heroe', index] );

  }

}
