import React from 'react'
import { Spinner } from 'react-bootstrap'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
  return isLoading ?
    (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    ): (
    <WrappedComponent {...otherProps} />
  )
}

export default WithSpinner