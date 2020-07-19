import React, { Fragment } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/User/UserSelectors'
import UserProfile from './UserProfile'

const UserContainer = ({ currentUser }) => {
  const imagePlaceholder = 'https://boxist.com/portfolio/wp-content/uploads/2009/08/Puppy-Dog-Sleeping-in-Hands.jpg'
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