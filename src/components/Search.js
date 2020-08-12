import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={props.pokeSearch} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
