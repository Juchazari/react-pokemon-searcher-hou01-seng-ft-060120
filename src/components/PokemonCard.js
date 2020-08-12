import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    spriteFront: true
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        spriteFront: !prevState.spriteFront
      }
    })
  }

  render() {
    const poke = this.props.poke;
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img
              src={this.state.spriteFront ? poke.sprites.front : poke.sprites.back}
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {poke.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard