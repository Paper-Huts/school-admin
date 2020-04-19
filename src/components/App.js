import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavigationContainer from '../components/Navigation/NavigationContainer'
import LandingContainer from '../components/Landing/LandingContainer'
import StudentApplications from '../components/StudentApplications/StudentApplications'
import Tuition from '../components/Tuition/Tuition'
import Help from '../components/Help/Help'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md={2}>
            <NavigationContainer />
          </Col>
          <Col>
            <Switch>
              <Route exact path='/' component={LandingContainer} />
              <Route exact path='/studentApplications' component={StudentApplications} />
              <Route exact path='/tuition' component={Tuition} />
              <Route exact path='/help' component={Help} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Fragment>
    
  );
}

export default App;
