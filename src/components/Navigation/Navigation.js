import React, { Fragment } from 'react'
import styles from '../../stylesheets/Navigation.module.css'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Navigation = () => (
  <Nav defaultActiveKey="/" className="flex-column">
    <Link componentClass={Nav.Link} to='/'>Noble Christian School</Link>
    <Link componentClass={Nav.Link} to='/Application'>Applications</Link>
    <Link componentClass={Nav.Link} to='/Tuition'>Tuition</Link>
    <Link componentClass={Nav.Link} to='/Wiki'>Wiki</Link>
    <Link componentClass={Nav.Link} to='/Tuition'>Tuition</Link>
  </Nav>
)

export default Navigation