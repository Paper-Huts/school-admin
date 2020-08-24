import React, { Fragment } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/User/UserSelectors'
import UserProfile from './UserProfile'

const UserContainer = ({ currentUser }) => {
  const imagePlaceholder = 'https://cdna.artstation.com/p/assets/images/images/021/654/320/large/jeremy-anninos-td-ekko-final.jpg?1572466275'
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