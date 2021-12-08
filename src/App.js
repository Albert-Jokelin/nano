import './App.css';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Error404 from './pages/Error-404'
import Marketplace from './pages/Marketplace'
import Resources from './pages/resources'

function App() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/404" component={Error404} />
            <Route path="/marketplace" component={Marketplace} />
            <Route path="/resources" component={Resources} />
            <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
