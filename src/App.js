import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      {/* Switch ensures that only first matching route is rendered; provides more control  */}
      <Switch>
        {/* Note: only the top level component passed into Route will get access to match, history, location props; so to get around this, use withRouter in menu-item.component where the props are actually needed */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopePage} />
      </Switch>
    </div>
  );
}

export default App;
