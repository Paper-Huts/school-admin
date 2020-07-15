import React from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'
import _ from 'lodash'

const TableList = ({ data, include, exclude, actions }) => {

  const filterData = (list, includeList, excludeList) => {
    let filteredList = Object.values(data)
    if (includeList) {
      filteredList = _.map(list, _.partialRight(_.pick, includeList))
    }
    if (excludeList) {
      filteredList = _.map(filteredList, _.partialRight(_.omit, excludeList))
    }
    return filteredList
  }

  const arrayToMap = data ? filterData(data, include, exclude).slice(0,10) : null
  const headerList = arrayToMap.length > 0 ? Object.keys(arrayToMap[0]) : null

  return (
    <Row>
      <Col>
        { arrayToMap.length > 0 ? (
        <Table striped bordered hover size='sm' responsive>
          <thead>
            <tr>
              <th>#</th>
              {
                headerList ? 
                headerList.map((header, idx) => (
                  <th key={idx}>{_.startCase(header)}</th>
                )) :
                null
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
                <td>{idx + 1}</td>
                {
                  headerList.map((item, idx) => (
                    <td key={idx}>{row[item]}</td>
                  ))
                }
                {
                  actions ? 
                  Object.entries(actions).map(([key, value]) => (
                    <td key={key}>
                      <Button size='sm' onClick={(e, row) => value.onClick(e, row)}>{_.startCase(value.label)}</Button>
                    </td>
                  )) :
                  null
                }             
              </tr>
            ))
          }
          </tbody>  
        </Table>
        ) : <h6>Data not currently available</h6>}   
      </Col>
    </Row>
  )
}

export default TableList