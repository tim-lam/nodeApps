<h3>Top Heroes</h3>
<div class="grid grid-pad">
  <div *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]"  class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </div>
</div>
<app-hero-search></app-hero-search>

import * as React from 'react';
import { Link } from 'react-router-dom';
import { HEROES } from '../mock-heroes';

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
