
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import {Home, Dashboard, Portfolio} from './pages'
import { PrivateRoute, PublicRoute} from './routes/'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute component={Dashboard} path='/dashboard' exact/>
          <PrivateRoute component={Portfolio} path='/portfolio' exact/>
          <PublicRoute  component={Home} path='/' exact  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
