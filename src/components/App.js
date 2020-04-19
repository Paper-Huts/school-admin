import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import NavigationContainer from '../components/Navigation/NavigationContainer'
import LandingContainer from '../components/Landing/LandingContainer'
import Applications from '../components/Applications/Applications'
import TuitionContainer from '../components/Tuition/TuitionContainer'
import Help from '../components/Help/Help'

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
              <Route exact path='/applications' component={Applications} />
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
