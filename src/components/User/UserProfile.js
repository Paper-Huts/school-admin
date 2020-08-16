import React from 'react'
import { Container, Row, Col, Image, Card, Button, Form } from 'react-bootstrap'

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
                    <Form>
                      <Form.Group>
                        <Form.Control as='select'>
                          <option>Select Collection to Update</option>
                          <option>Student Applicants</option>
                          <option>Student List</option>
                          <option>Teachers</option>
                          <option>Tuition</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <Form.File id="UploadToFirestore" label="Upload dataset" />
                      </Form.Group>
                      <Button>Upload to Firestore</Button>
                    </Form>
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