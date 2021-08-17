import React, { Component } from 'react';
import Tablero from "./Tablero";
import Header from "./Header";
import construirBaraja from './utils/construirBaraja.js';
import './App.css';

const getEstadoInicial = () => {
  const baraja = construirBaraja();
  return{
    baraja
  };
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = getEstadoInicial();
  }
  render() {
    return (
      <div className="App">
       <Header/>
       <Tablero
       baraja={this.state.baraja} />
      </div>
    );
  }
}

export default App;
