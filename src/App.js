import './App.css';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Error404 from './pages/Error-404'

function App() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/404" component={Error404} />
            <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
