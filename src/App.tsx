import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './pages/Homepage'
import './App.module.scss'
import Products from './pages/Products'

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <Homepage/>
          </Route>
          <Route path='/products'>
            <Products/>
          </Route>
        </Switch>

      </Router>
  );
};

export default App;
