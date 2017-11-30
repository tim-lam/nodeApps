/* <h3>Top Heroes</h3>
<div class="grid grid-pad">
  <div *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]"  class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </div>
</div>
<app-hero-search></app-hero-search> */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { HEROES } from 'data-access/mock-heroes';


// const logo = require('./logo.svg');

class Dashboard extends React.Component {
    render() {
        return (
            <div className="grid grid-pad">
                {HEROES.map((hero, i) =>
                    (
                        <Link to={`/detail/${hero.id}`} className="col-1-4" >
                            <div className="module hero">
                                <h4>{hero.name}</h4>
                            </div>
                        </Link>
                    ))}
            </div>
        );
    }
}

export default Dashboard;