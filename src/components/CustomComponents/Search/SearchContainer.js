import React from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
import SearchList from './SearchList'

const SearchContainer = ({ data, placeholder }) => {
  return (
    <Container>
      <SearchBar 
        data={data}
        placeholder={placeholder} />
      {/* <SearchList data={data} /> */}
    </Container>
  )
}


export default SearchContainer