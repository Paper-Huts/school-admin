import React, { Fragment, Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import styles from './stylesheets/App.module.css'
import { setCurrentUser } from './redux/User/UserActions'
import { selectCurrentUser } from './redux/User/UserSelectors';

import NavigationContainer from './components/Navigation/NavigationContainer'
import LandingContainer from './components/Landing/LandingContainer'
import AdmissionsContainer from './components/Admissions/AdmissionsContainer'
import TuitionContainer from './components/Tuition/TuitionContainer'
import Help from './components/Help/Help'
import StaffContainer from './components/Staff/StaffContainer'
import NewStudent from './components/Admissions/NewStudent/NewStudent'
import UpdateStudent from './components/Admissions/UpdateStudent/UpdateStudent'
import TuitionPayment from './components/Tuition/TuitionPayment/TuitionPayment'
import TuitionPaymentHistory from './components/Tuition/TuitionPaymentHistory/TuitionPaymentHistory'
import PayStudentFees from './components/Tuition/TuitionPayment/PayStudentFees'
import AuthPages from './components/AuthPages/AuthPages'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col md={2} className={styles.sideNav}>
              <NavigationContainer />
            </Col>
            <Col>
              <Switch>
                <Route exact path='/' component={LandingContainer} />
                <Route exact path='/admissions' component={AdmissionsContainer} />
                <Route exact path='/tuition' component={TuitionContainer} />
                <Route exact path='/help' component={Help} />
                <Route exact path='/staff' component={StaffContainer} />
                <Route exact path='/tuition/payment' component={TuitionPayment} />
                <Route exact path='/tuition/payment-history' component={TuitionPaymentHistory} />
                <Route path='/tuition/payment/:studentName' component={PayStudentFees} />
                <Route exact path='/admissions/new_student' component={NewStudent} />
                <Route exact path='/admissions/update_student' component={UpdateStudent} />
                <Route exact path='/login' component={AuthPages} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
