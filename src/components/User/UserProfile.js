import React from 'react'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap'

const UserProfile = ({currentUser, imagePlaceholder}) => {
  return (
    <Container fluid>
      <Row>
        <Col sm={6} md={6} lg={3}>
          <Card>
            {console.log(imagePlaceholder)}
            <Card.Img variant='top' src={imagePlaceholder} alt='Profile Pic' />
            <Card.Body>
              <Card.Title>{currentUser.displayName}</Card.Title>
              <Card.Text>
                <Row>
                  <Col>
                    <Button>Upload File</Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default UserProfile