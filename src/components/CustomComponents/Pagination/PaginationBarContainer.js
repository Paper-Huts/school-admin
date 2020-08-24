import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationBarContainer = props => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  return (
    <Pagination>

    </Pagination>
  )
}

export default PaginationBarContainer