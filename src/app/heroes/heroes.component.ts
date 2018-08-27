import {
  Component,
  OnInit,
} from '@angular/core';

import {
  Hero
} from '../classes/hero';
// import { HEROES } from '../mocks/mock-heroes';

import {
  HeroService
} from '../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //   hero: Hero = {
  // 	  id: 1,
  // 	  name: 'Windstorm',
  //   };
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) {
    this.getHeroes();
  }

  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //   console.log(this.selectedHero);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      })
  }
}
