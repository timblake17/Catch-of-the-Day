import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import React from 'react';
import App from './App';
import NotFound from './NotFound'


const Router = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker}/>
      <Route exact path="/store/:storeId" component={App}/>
      <Route exact path="/store/:storeId" component={App}/>
      <Route component={NotFound}/>

    </Switch>
  </BrowserRouter>

)

export default Router;
