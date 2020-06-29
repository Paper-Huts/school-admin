import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import _ from 'lodash'

const SearchList = ({ data, includeList }) => {
  const headerList = Object.keys(data[0])
  const arrayToMap = Object.values(data)

  return (
    <Row>
      <Col>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              {console.log(Object.values(data))}
              {
                headerList.map((header, idx) => (
                  <th key={idx}>{_.startCase(header)}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
          {
            arrayToMap.map((row, idx) => (
              <tr key={idx}>{
                headerList.map((item, idx) => (
                  <td key={idx}>{row[item]}</td>
                ))
              }</tr>
            ))
          }
          </tbody>      
        </Table>
      </Col>
    </Row>
  )
}

export default SearchList