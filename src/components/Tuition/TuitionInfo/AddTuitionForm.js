import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Form, Row, Button, Col, Modal } from "react-bootstrap";

import {
  selectGradeLevelsForList,
  selectGradeLevelsForReference,
} from "../../../redux/GradeLevels/GradeLevelsSelectors";
import { addTuition } from "../../../redux/Tuition/TuitionActions";
import {
  selectCurrentSchoolPeriod,
  selectSchoolPeriods,
} from "../../../redux/SchoolPeriod/SchoolPeriodSelectors";
import { selectCurrentUser } from "../../../redux/User/UserSelectors";

class AddTuitionForm extends React.Component {
  state = {
    gradeLevelCode: "n1",
    costOfTuition: 0,
    costOfBooksAndStationery: 0,
    costOfMiscItems: 0,
    academicYear: this.props.currentSchoolPeriod.academicYear,
    academicTerm: this.props.currentSchoolPeriod.academicTerm,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      gradeLevelCode,
      costOfTuition,
      costOfMiscItems,
      costOfBooksAndStationery,
      academicTerm,
      academicYear,
    } = this.state;

    const {
      schoolPeriods,
      gradeLevelsForReference,
      currentUser,
      addTuition,
    } = this.props;

    const selectedSchoolPeriod = schoolPeriods.find(
      (schoolPeriod) =>
        schoolPeriod.academicYear === academicYear &&
        schoolPeriod.academicTerm === parseInt(academicTerm)
    );

    const selectedGradeLevel = gradeLevelsForReference[gradeLevelCode];

    console.log("selected grade level: ", selectedGradeLevel);

    const newTuition = {
      id: gradeLevelCode + selectedSchoolPeriod.schoolPeriodId,
      schoolPeriodId: selectedSchoolPeriod.schoolPeriodId,
      gradeLevelCode,
      gradeLevelName: selectedGradeLevel.name, //needs fine tuning
      costOfTuition: parseFloat(costOfTuition),
      costOfBooksAndStationery: parseFloat(costOfBooksAndStationery),
      costOfMiscItems: parseFloat(costOfMiscItems),
      createdAt: Date.now(),
      createdBy: currentUser ? currentUser.displayName : "",
      timestamp: Date.now(),
    };

    console.log("new tuition created: ", newTuition);

    addTuition(newTuition);

    this.setState({
      gradeLevelCode: "n1",
      costOfTuition: 0,
      costOfBooksAndStationery: 0,
      costOfMiscItems: 0,
      academicYear: this.props.currentSchoolPeriod.academicYear,
      academicTerm: this.props.currentSchoolPeriod.academicTerm,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      gradeLevelCode,
      costOfBooksAndStationery,
      costOfMiscItems,
      costOfTuition,
      academicTerm,
      academicYear,
    } = this.state;

    const { gradeLevels, show, onHide } = this.props;

    return (
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Tuition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Form.Group as={Col} controlId="formGradeName">
                <Form.Label>Grade Name</Form.Label>
                <Form.Control
                  as="select"
                  name="gradeLevelCode"
                  onChange={this.handleChange}
                  defaultValue={gradeLevelCode}
                  custom
                >
                  {gradeLevels.map((gradeLevel) => (
                    <option key={gradeLevel.id} value={gradeLevel.gradeCode}>
                      {gradeLevel.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formAcademicYear">
                  <Form.Label>For Acadamic Year</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    name="academicYear"
                    onChange={this.handleChange}
                    defaultValue={academicYear}
                  >
                    <option value="2019/2020">2019/2020</option>
                    <option value="2018/2019">2018/2019</option>
                    <option value="2017/2018">2017/2018</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formTerm">
                  <Form.Label>For Term</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    name="academicTerm"
                    onChange={this.handleChange}
                    defaultValue={academicTerm}
                  >
                    <option value={3}>Three</option>
                    <option value={2}>Two</option>
                    <option value={1}>One</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <Form.Group controlId="formCostOfTuition">
                  <Form.Label>Cost of Tuition</Form.Label>
                  <Form.Control
                    type="number"
                    name="costOfTuition"
                    value={costOfTuition}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group controlId="formCostOfBooksAndStationery">
                  <Form.Label>Cost of Books & Stationery</Form.Label>
                  <Form.Control
                    type="number"
                    name="costOfBooksAndStationery"
                    value={costOfBooksAndStationery}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group controlId="formCostOfMiscItems">
                  <Form.Label>Cost of Miscellaneous Items</Form.Label>
                  <Form.Control
                    type="number"
                    name="costOfMiscItems"
                    value={costOfMiscItems}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="button" block variant="secondary">
                  Cancel
                </Button>
              </Col>
              <Col>
                <Button type="submit" block onClick={onHide}>
                  Add Tuition
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  gradeLevels: selectGradeLevelsForList,
  gradeLevelsForReference: selectGradeLevelsForReference,
  currentSchoolPeriod: selectCurrentSchoolPeriod,
  schoolPeriods: selectSchoolPeriods,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addTuition: (newTuition) => dispatch(addTuition(newTuition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTuitionForm);
