import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const POKEMON_URL = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: "",
  }

  componentDidMount() {
    fetch(POKEMON_URL)
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  pokeSearch = (e) => {
    this.setState({
      search: e.target.value,
    })
  }

  handlePokeForm = (e, formData) => {
    e.preventDefault()
    e.target.reset()

    const poke = {
      "name": formData.name,
      "hp": formData.hp,
      "sprites": {
        "front": formData.frontUrl,
        "back": formData.backUrl
      }
    }

    fetch(POKEMON_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(poke)
    }).then(res => res.json())
      .then(poke => {
        const pokemon = [ ...this.state.pokemon, poke ]
        this.setState({ pokemon })
      })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handlePokeForm={this.handlePokeForm} />
        <br />
        <Search pokeSearch={this.pokeSearch} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} pokeSearch={this.state.search} />
      </Container>
    )
  }
}

export default PokemonPage
