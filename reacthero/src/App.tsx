import * as React from 'react';
import './App.css';
import Heroes from './heroes.component';
import Dashboard from './dashboard.component';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {

  render() {
    var title = 'Tour of Heroes';
    return (
      <Router>
        <div>
          <h1>{title}</h1>
          <nav>
            <Link to="/dashboard" >Dashboard</Link>
            <Link to="/heroes" >Heroes</Link>
          </nav>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/heroes" component={Heroes} />
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        </div>
      </Router>
    );
  }
}

export default App;
