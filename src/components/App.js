import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import NavigationContainer from '../components/Navigation/NavigationContainer'
import LandingContainer from '../components/Landing/LandingContainer'
import StudentApplications from '../components/StudentApplications/StudentApplications'
import TuitionContainer from '../components/Tuition/TuitionContainer'
import Help from '../components/Help/Help'

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
              <Route exact path='/studentApplications' component={StudentApplications} />
              <Route exact path='/tuition' component={TuitionContainer} />
              <Route exact path='/help' component={Help} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Fragment>
    
  );
}

export default App;
