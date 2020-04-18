import React, { Fragment, Component } from 'react'
import Navigation from './Navigation'

class NavigationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { id: 0, title: 'Noble Christian School', path: '/'},
        { id: 1, title: 'Student Applications', path: '/applications'},
        { id: 2, title: 'School Fees', path: '/tuition'},
        { id: 3, title: 'Help', path: '/help'}
      ]
    }
  }

  render() {
    const { navItems } = this.state
    return (
      <Fragment>
        <Navigation navItems={navItems} />
      </Fragment>
    )
  }
}

export default NavigationContainer