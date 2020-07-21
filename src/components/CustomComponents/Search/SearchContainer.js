import React from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
import TableList from '../Lists/TableList'
import PaginationBarContainer from '../Pagination/PaginationBarContainer'

const SearchContainer = ({ data, placeholder, controlId }) => {
  return (
    <Container>
      <SearchBar 
        data={data}
        placeholder={placeholder}
        controlId={controlId} />
      <TableList data={data} />
      <PaginationBarContainer />
    </Container>
  )
}


export default SearchContainer