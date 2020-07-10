import React from "react";

import { Form, Row, Button, Col } from "react-bootstrap";

class AddTuitionForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Add New Tuition</h3>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Form.Group as={Col} controlId="formGradeName">
              <Form.Label>Grade Name</Form.Label>
              <Form.Control type="text" name="gradeName" />
            </Form.Group>
          </Row>
          <Row>
            <Col md={6} xs={12}>
              <Form.Group controlId="formCostOfTuition">
                <Form.Label>Cost of Tuition</Form.Label>
                <Form.Control type="number" name="costOfTuition" />
              </Form.Group>
            </Col>
            <Col md={6} xs={12}>
              <Form.Group controlId="formCostOfBooksAndStationery">
                <Form.Label>Cost of Books & Stationery</Form.Label>
                <Form.Control type="number" name="costOfBooksAndStationery" />
              </Form.Group>
            </Col>
            <Col md={6} xs={12}>
              <Form.Group controlId="formCostOfMiscItems">
                <Form.Label>Cost of Miscellaneous Items</Form.Label>
                <Form.Control type="number" name="costOfMiscItems" />
              </Form.Group>
            </Col>
          </Row>
          <Button>Cancel</Button>{"         "}
          <Button>Add Tuition</Button>
        </Form>
      </div>
    );
  }
}

export default AddTuitionForm;
