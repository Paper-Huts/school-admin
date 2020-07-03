import React from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'
import _ from 'lodash'

const SearchList = ({ data, includeList, buttonList }) => {
  const headerList = Object.keys(data[0])
  const arrayToMap = Object.values(data)

  return (
    <Row>
      <Col>
        <Table striped bordered hover size='sm' responsive>
          <thead>
            <tr>
              {console.log(Object.values(data), buttonList)}
              {
                headerList.map((header, idx) => (
                  <th key={idx}>{_.startCase(header)}</th>
                ))
              }
              {
                buttonList ? 
                <th colSpan={buttonList.length} center>Actions</th> :
                null
              }
            </tr>
          </thead>
          <tbody>
          {
            arrayToMap.map((row, idx) => (
              <tr key={idx}>
                {
                  headerList.map((item, idx) => (
                    <td key={idx}>{row[item]}</td>
                  ))
                }
                {
                  buttonList ? 
                  buttonList.map((action, idx) => (
                    <td key={idx}>
                      <Button>{_.startCase(action.label)}</Button>
                    </td>
                  )) :
                  null
                }             
              </tr>
            ))
          }
          </tbody>      
        </Table>
      </Col>
    </Row>
  )
}

export default SearchList