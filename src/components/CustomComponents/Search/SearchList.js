import React from 'react'
import { Row, Table, Button } from 'react-bootstrap'

const SearchList = ({ data, searchProps }) => (
  <Row>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            {data.title}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr>
            <td>
              {item}
            </td>
            <td>
              <Button>
                {searchProps.itemButton}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>      
    </Table>
  </Row>
)