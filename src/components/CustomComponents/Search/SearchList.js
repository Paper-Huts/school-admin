import React from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'
import _ from 'lodash'

const SearchList = ({ data, include, exclude, actions }) => {

  const filterData = (list, includeList, excludeList) => {
    let filteredList = Object.values(data)
    if (includeList) {
      filteredList = _.map(list, _.partialRight(_.pick, includeList))
    }
    console.log('Filtered List: ', filteredList)
    if (excludeList) {
      filteredList = _.map(filteredList, _.partialRight(_.omit, excludeList))
    }
    return filteredList
  }

  const arrayToMap = filterData(data, include, exclude)
  const headerList = Object.keys(arrayToMap[0])

  return (
    <Row>
      <Col>
        <Table striped bordered hover size='sm' responsive>
          <thead>
            <tr>
              {console.log(Object.values(data), actions)}
              {
                headerList.map((header, idx) => (
                  <th key={idx}>{_.startCase(header)}</th>
                ))
              }
              {
                actions ? 
                <th colSpan={Object.keys(actions).length}>Actions</th> :
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
                  actions ? 
                  Object.entries(actions).map(([key, value]) => (
                    <td key={key}>
                      <Button>{_.startCase(value.label)}</Button>
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