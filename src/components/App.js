import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import Navigation from '../components/Navigation/Navigation'
import Landing from '../components/Landing/Landing'
import Applications from '../components/Applications/Applications'
import TuitionContainer from '../components/Tuition/TuitionContainer'
import Help from '../components/Help/Help'

function App() {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Navigation />
          </Col>
          <Col>
            <Switch>
              <Route exact path='/' component={Landing} />
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
