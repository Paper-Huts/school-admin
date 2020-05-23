import React from 'react'
import { Table } from 'react-bootstrap'

const TableList = listItems => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          {console.log(Object.keys(listItems))}
        </tr>
      </thead>
    </Table>
  )
}

export default TableList