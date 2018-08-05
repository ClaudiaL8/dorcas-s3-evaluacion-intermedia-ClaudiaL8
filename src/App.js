import React, { Component } from 'react';
import './App.css';
import PokemonList from './component/PokemonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="page__title">Mi lista de pokemon</h1>
        <PokemonList pokemons={this.props.pokemons} />
      </div>
    );
  }
}

export default App;
