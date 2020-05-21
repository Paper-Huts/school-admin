import React from 'react'
import styles from '../../stylesheets/Navigation.module.css'
import { Link } from 'react-router-dom'
import { Nav, NavbarBrand, Button } from 'react-bootstrap'
import Logo from '../../images/Noble Christian School Logo_01.png'

const Navigation = ({ navItems, navBrand }) => (
  <Nav variant='pills' defaultActiveKey="/" className="flex-column">
    <Nav.Item>
      <Nav.Link as={Link} to={navBrand.path} key={navBrand.id}>
        {/* <img src={Logo} className={styles.logo} alt={navBrand.title} /> */}
        <h2 className={styles.logo}>{navBrand.title}</h2>
      </Nav.Link>
    </Nav.Item>
    {navItems.map(({id, path, title}) => (
      <Nav.Item className={styles.navItems}>
        <Nav.Link as={Link} to={path} key={id}>{title}</Nav.Link>
      </Nav.Item>
    ))}
    <Button variant='secondary' className='mt-5' as={Link} to='/login'>Login</Button>
  </Nav>
)

export default Navigation