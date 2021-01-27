import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MovieDetail from './components/MovieDetail';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
         <Route exact path="/"><App /></Route>
         <Route path="/movie/:id"><MovieDetail /></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
