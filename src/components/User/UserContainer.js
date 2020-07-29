import React, { Fragment } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/User/UserSelectors'
import UserProfile from './UserProfile'

const UserContainer = ({ currentUser }) => {
  const imagePlaceholder = 'https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  return (
    <Fragment>
      <UserProfile imagePlaceholder={imagePlaceholder} currentUser={currentUser} />
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(UserContainer)