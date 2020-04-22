import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
import SearchList from './SearchList'

class SearchContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <Container>
        <SearchBar data={this.props.data} />
        <SearchList data={this.props.data} />
      </Container>
    )
  }
}

export default SearchContainer