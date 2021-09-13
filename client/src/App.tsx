import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import PrivateRoute from './Routing/PrivateRoute';

import Navbar from './Component/Navbar';

import Home from './Pages/Home';

import Login from './Pages/Login';

import Signup from './Pages/Signup';

import Products from './Pages/ProductCat';

import SingleCategory from './Pages/SingleCategory';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products/:id" component={SingleCategory} />
          <PrivateRoute exact path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
