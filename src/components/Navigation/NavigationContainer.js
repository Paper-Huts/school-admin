import React, { Fragment, Component } from 'react'
import Navigation from './Navigation'

class NavigationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navBrand: { id: 0, title: 'School Admin', path: '/'},
      navItems: [
        { id: 1, title: 'Student Applications', path: '/applications'},
        { id: 2, title: 'School Fees', path: '/tuition'},
        { id: 3, title: 'Help', path: '/help'}
      ]
    }
  }

  render() {
    const { navItems, navBrand } = this.state
    return (
      <Fragment>
        <Navigation navItems={navItems} navBrand={navBrand} />
      </Fragment>
    )
  }
}

export default NavigationContainer