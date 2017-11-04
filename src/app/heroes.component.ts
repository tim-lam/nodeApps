import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html',
  // template: `
  //   <h1>{{title}}</h1>
  //   <h2>My Heroes</h2>
  //   <ul class="heroes">
  //     <li *ngFor="let hero of heroes"
  //     [class.selected]="hero === selectedHero"
  //     (click)="onSelect(hero)">
  //       <span class="badge">{{hero.id}}</span> {{hero.name}}
  //     </li>
  //   </ul>
  //   <hero-detail [hero]="selectedHero"></hero-detail>
  //   `,
  //providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  constructor(
    private router: Router, private heroService: HeroService) { }
  selectedHero: Hero;
  heroes: Hero[];
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
