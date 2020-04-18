import React, { Fragment, Component } from 'react'
import styles from '../../stylesheets/Navigation.module.css'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { id: 1, title: 'Student Applications', path: '/'},
        { id: 1, title: 'School Fees', path: '/tuition'},
        { id: 1, title: 'Help', path: '/help'}
      ]
    }
  }

  render() {
    const { navItems } = this.state
    return (
      <Fragment>
        <Nav>
          {navItems.map(navItem => (
            <Nav.Item>
              <Link to={navItem.path} componentClass={Nav.Link}>{navItem.title}</Link>
            </Nav.Item>
          ))}
        </Nav>
      </Fragment>
    )
  }
}

export default Navigation