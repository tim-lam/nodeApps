import * as React from 'react';
import { Link } from 'react-router-dom';
import { HEROES } from 'data-access/mock-heroes';

// const logo = require('./logo.svg');

class Heroes extends React.Component {
  render() {
    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {HEROES.map((hero, i) =>
            (
              <li>
                <Link to={`/detail/${hero.id}`}>{hero.id}</Link>
                <a href="/detail/{hero.id}">
                  <span className="badge">{hero.id}</span>{hero.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

/* <h1>{{title}}</h1>
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <a routerLink="/detail/{{hero.id}}">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </a>
    <button class="delete" title="delete hero"
    (click)="delete(hero)">x</button>
  </li>
</ul>
<div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>
<!-- <hero-detail [hero]="selectedHero"></hero-detail> --> */

export default Heroes;