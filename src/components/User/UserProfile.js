import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import UserMiniNav from './UserMiniNav'

const UserProfile = ({currentUser, imagePlaceholder}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Row>
              <Col lg={3}>
                <Card.Img src={imagePlaceholder} alt='Profile Pic' />
              </Col>
              <Col lg={9}>
                <Card.Body>
                  <Card.Title>{currentUser.displayName}</Card.Title>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserMiniNav />
        </Col>
      </Row>
      </Container>
  )
}

export default UserProfile