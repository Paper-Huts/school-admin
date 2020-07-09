import React, { Fragment } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import NavigationMain from './NavigationMain'
import { selectNavigation } from '../../redux/Navigation/NavigationSelectors'
import { selectCurrentUser } from '../../redux/User/UserSelectors'

const NavigationContainer = ({navigation: {navItems, navBrand}, currentUser}) => (
  <Fragment>
    <NavigationMain navItems={navItems} navBrand={navBrand} currentUser={currentUser} />
  </Fragment>
)

const mapStateToProps = createStructuredSelector({
  navigation: selectNavigation,
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(NavigationContainer)