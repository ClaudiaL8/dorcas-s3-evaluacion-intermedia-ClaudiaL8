import React, { Component } from 'react';
import './App.css';
import Lista from './component/Lista'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="page__title">Mi lista de pokemon</h1>
        <ul className="page__list">
          {this.props.pokemons.map(function (item) {
            return (
              <li className="items__pokemon">
                <img className="pokemon__img" src={item.url} />
                <h2 className="pokemon__name">{item.name}</h2>
                <ul className="listpokemon__attack">
                  {item.types.map(function (items) {
                    return (
                      <li className="items__attack">{items}</li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
