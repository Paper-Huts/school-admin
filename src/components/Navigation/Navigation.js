import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/User/UserSelectors'
import styles from '../../stylesheets/Navigation.module.css'


const Navigation = ({ navItems, navBrand, currentUser }) => (
  <Nav variant='pills' defaultActiveKey="/" className="flex-column">
    <Nav.Item>
      <Nav.Link as={Link} to={navBrand.path} key={navBrand.id}>
        {/* <img src={Logo} className={styles.logo} alt={navBrand.title} /> */}
        <h2 className={styles.logo}>{navBrand.title}</h2>
      </Nav.Link>
    </Nav.Item>
    {navItems.map(({id, path, title}) => (
      <Nav.Item className={styles.navItems} key={id}>
        <Nav.Link as={Link} to={path}>{title}</Nav.Link>
      </Nav.Item>
    ))}
    {
      currentUser ?
      <Button variant='secondary' className='mt-5' onClick={() => auth.signOut()}>Logout</Button> :
      <Button variant='secondary' className='mt-5' as={Link} to='/login'>Login</Button>
    }
  </Nav>
)

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Navigation)