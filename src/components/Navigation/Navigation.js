import React from 'react'
import styles from '../../stylesheets/Navigation.module.css'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Navigation = (props) => (
  <Nav defaultActiveKey="/" className="flex-column">
    {props.navItems.map(navItem => (
      <Nav.Item>
        <Nav.Link as={Link} to={navItem.path} key={navItem.id}>{navItem.title}</Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
)

export default Navigation