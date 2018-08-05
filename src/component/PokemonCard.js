import React from 'react';

class PokemonCard extends React.Component {
  render() {
    return (
      <div className="items__pokemon">
        <img className="pokemon__img" src={this.props.item.url} />
        <h2 className="pokemon__name">{this.props.item.name}</h2>
        <ul className="listpokemon__attack">
          {this.props.item.types.map(function (items) {
            return (
              <li className="items__attack">{items}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PokemonCard;