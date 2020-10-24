import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PokemonList from './PokemonList';
import { BrowserRouter, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';


ReactDOM.render(
  // <React.StrictMode>
  //   <PokemonList/>
  // </React.StrictMode>,
  <BrowserRouter>
    <div>
      <Route exact path="/" component={PokemonList}/>
      <Route path="/pokemon/:name" component={PokemonDetails}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
