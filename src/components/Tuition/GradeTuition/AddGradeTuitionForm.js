import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Form, Row, Button, Col } from "react-bootstrap";

import { selectGradeLevelsForList } from "./../../../redux/GradeLevels/GradeLevelsSelectors";
import { addTuition } from "./../../../redux/Tuition/TuitionActions";

class AddTuitionForm extends React.Component {
  state = {
    gradeName: "",
    costOfTuition: 0,
    costOfBooksAndStationery: 0,
    costOfMiscItems: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { gradeName, costOfBooksAndStationery, costOfMiscItems, costOfTuition } = this.state;
    return (
      <div>
        <h3>Add New Tuition</h3>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Form.Group as={Col} controlId="formGradeName">
              <Form.Label>Grade Name</Form.Label>
              <Form.Control as="select" name="gradeName" custom>
                {this.props.gradeLevels.map((gradeLevel) => (
                  <option key={gradeLevel.id} value={gradeLevel.gradeCode}>
                    {gradeLevel.name}
                  </option>
                ))}
              </Form.Control>
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
          <Button type="submit" block>Add Tuition</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  gradeLevels: selectGradeLevelsForList,
});

const mapDispatchToProps = (dispatch) => ({
  addTuition: (newTuition) => dispatch(addTuition(newTuition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTuitionForm);
