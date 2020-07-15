import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LinkCard = ({ title, path }) => {
  return (
    <Button size='lg' as={Link} to={path}>
      {title}
    </Button>
  )
}

export default LinkCard