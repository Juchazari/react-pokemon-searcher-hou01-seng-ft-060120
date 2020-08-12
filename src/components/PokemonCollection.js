import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {
          this.props.pokemon.filter(poke => {
            return poke.name.includes(this.props.pokeSearch.toLowerCase())
          }).map(poke => (
            <PokemonCard key={poke.id} poke={poke} />
          ))
        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
