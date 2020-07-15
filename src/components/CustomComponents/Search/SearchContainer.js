import React from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
import TableList from '../Lists/TableList'

const SearchContainer = ({ data, placeholder, controlId }) => {
  return (
    <Container>
      <SearchBar 
        data={data}
        placeholder={placeholder}
        controlId={controlId} />
      <TableList data={data} />
    </Container>
  )
}


export default SearchContainer