import React from 'react'

// Functional version
// const SearchBar = () => <input />;

// Class version
class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = { term: 'Enter Search Term' }
  }
  render () {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}

export default SearchBar
