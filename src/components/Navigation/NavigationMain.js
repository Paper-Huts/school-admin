import React from 'react'
import { Navbar, Nav, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { BsPersonSquare } from 'react-icons/bs'

import { auth } from '../../firebase/firebase.utils'

import styles from '../../stylesheets/Navigation.module.css'

const NavigationMain = ({ navItems, navBrand, currentUser }) => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg'>
      <Navbar.Brand as={Link} to={navBrand.path}>{_.upperCase(navBrand.title)}</Navbar.Brand>
      <Navbar.Toggle aria-controls='main-nav' />  
      <Navbar.Collapse id='main-nav' className='justify-content-between'>
        <Nav>
        {
          navItems.map(
            ({id, path, title}) => (
              <Nav.Link as={Link} to={path} key={id}>{_.upperCase(title)}</Nav.Link>
            )
          )
        }
        </Nav>
        <Nav>
        {
          currentUser ?
          (
            <div>
              <DropdownButton variant='outline-light' alignRight title={<BsPersonSquare />} id={styles.myDropdownToggle}>
                <Dropdown.Item onClick={() => auth.signOut()}>Logout</Dropdown.Item>
              </DropdownButton>
            </div>
          ) :
          <Button variant='outline-light' as={Link} to='/login'>Login</Button>
        }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationMain