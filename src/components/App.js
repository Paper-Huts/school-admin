import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import NavigationContainer from '../components/Navigation/NavigationContainer'
import LandingContainer from '../components/Landing/LandingContainer'
import StudentApplicationsContainer from '../components/StudentApplications/StudentApplicationsContainer'
import styles from '../stylesheets/App.module.css'
import TuitionContainer from '../components/Tuition/TuitionContainer'
import Help from '../components/Help/Help'
import NewStudent from './StudentApplications/NewStudent/NewStudent'
import UpdateStudent from './StudentApplications/UpdateStudent/UpdateStudent'

import TuitionPayment from '../components/Tuition/TuitionPayment/TuitionPayment'
import TuitionPaymentHistory from '../components/Tuition/TuitionPaymentHistory/TuitionPaymentHistory'
import PayStudentFees from '../components/Tuition/TuitionPayment/PayStudentFees'

function App() {
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
              <Route exact path='/applications' component={StudentApplicationsContainer} />
              <Route exact path='/tuition' component={TuitionContainer} />
              <Route exact path='/help' component={Help} />
              <Route exact path='/tuition/payment' component={TuitionPayment} />
              <Route exact path='/tuition/payment-history' component={TuitionPaymentHistory} />
              <Route path='/tuition/payment/:studentId' component={PayStudentFees} />
              <Route exact path='/applications/new_student' component={NewStudent} />
              <Route exact path='/applications/update_student' component={UpdateStudent} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Fragment>
    
  );
}

export default App;
