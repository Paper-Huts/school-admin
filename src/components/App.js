import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from '../components/Navigation/Navigation'
import Landing from '../components/Landing/Landing'
import Application from '../components/Application/Application'
import Tuition from '../components/Tuition/Tuition'
import Help from '../components/Help/Help'
import { Switch, Route } from 'react-router-dom'

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
              <Route exact path='/Application' component={Application} />
              <Route exact path='/Tuition' component={Tuition} />
              <Route exact path='/Help' component={Help} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Fragment>
    
  );
}

export default App;
