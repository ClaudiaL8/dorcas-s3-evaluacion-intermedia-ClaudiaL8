import React, { Component } from 'react';
import './App.css';
import Lista from './component/Lista'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="list">
          {this.props.pokemons.map(function (item) {
            return (
              <li><img src={item.url}/><h1>{item.name}</h1><p>{item.types}</p></li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
