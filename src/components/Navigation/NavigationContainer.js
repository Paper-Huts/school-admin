import React, { Fragment } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import Navigation from './Navigation'
import { selectNavigation } from '../../redux/Navigation/NavigationSelectors'

const NavigationContainer = ({navigation: {navItems, navBrand}}) => (
  <Fragment>
    <Navigation navItems={navItems} navBrand={navBrand} />
  </Fragment>
)

const mapStateToProps = createStructuredSelector({
  navigation: selectNavigation
})

export default connect(mapStateToProps)(NavigationContainer)