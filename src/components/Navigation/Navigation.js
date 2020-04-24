import React from 'react'
import styles from '../../stylesheets/Navigation.module.css'
import { Link } from 'react-router-dom'
import { Nav, NavbarBrand } from 'react-bootstrap'
import Logo from '../../images/Noble Christian School Logo_01.png'

const Navigation = (props) => (
  <Nav variant='pills' defaultActiveKey="/" className="flex-column">
    <Nav.Item>
      <Nav.Link as={Link} to={props.navBrand.path} key={props.navBrand.id}>
        {/* <img src={Logo} className={styles.logo} alt={props.navBrand.title} /> */}
        <h2 className={styles.logo}>PaperHuts Admin</h2>
      </Nav.Link>
    </Nav.Item>
    {props.navItems.map(navItem => (
      <Nav.Item className={styles.navItems}>
        <Nav.Link as={Link} to={navItem.path} key={navItem.id}>{navItem.title}</Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
)

export default Navigation