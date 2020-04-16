import React, { Fragment } from 'react'
import styles from '../../stylesheets/Navigation.module.css'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Navigation = () => (
  <Nav defaultActiveKey="/" className="flex-column">
    <Nav.Item><Nav.Link componentClass={Link} to='/'>Noble Christian School</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link componentClass={Link} to='/Application'>Applications</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link componentClass={Link} to='/Tuition'>Tuition</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link componentClass={Link} to='/Wiki'>Wiki</Nav.Link></Nav.Item>
  </Nav>
)

export default Navigation