import React from 'react';
import PokemonCard from './PokemonCard';

class PokemonList extends React.Component {
  render() {
    return (
      <ul className="page__list">
        {this.props.pokemons.map(function (item) {
          return (
            <li>
              <PokemonCard item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PokemonList;