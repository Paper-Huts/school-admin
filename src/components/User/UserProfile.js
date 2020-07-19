import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

const UserProfile = ({currentUser, imagePlaceholder}) => {
  return (
    <Container fluid>
      <Row>
        <Col sm={6} md={6} lg={3}>
          <Card>
            <Card.Img variant='top' src={''} alt='Profile Pic' />
            <Card.Body>
              <Card.Title>{currentUser.displayName}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default UserProfile