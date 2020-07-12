import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../CustomComponents/Header";
import CurrentSchoolPeriodBar from "../../CustomComponents/CurrentSchoolPeriodBar";
import AddTuitionForm from "./AddGradeTuitionForm";

import { selectTuitionListByGradeLevel } from "../../../redux/Tuition/TuitionSelectors";

import styles from "../../../stylesheets/CustomComponents.module.css";
import {
  selectSchoolPeriods,
  selectCurrentSchoolPeriod,
} from "../../../redux/SchoolPeriod/SchoolPeriodSelectors";

class GradeTuition extends React.Component {
  state = {
    academicYear: this.props.currentSchoolPeriod.academicYear,
    academicTerm: this.props.currentSchoolPeriod.academicTerm,
    tuitionListBySchoolPeriod: this.props.tuitionList,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { academicTerm, academicYear } = this.state;

    const { schoolPeriods, tuitionList } = this.props;

    //selects school period id from list of school periods
    const selectedSchoolPeriod = schoolPeriods.find(
      (schoolPeriod) =>
        schoolPeriod.academicYear === academicYear &&
        schoolPeriod.academicTerm === parseInt(academicTerm)
    );
    //console.log("selected school period: ", selectedSchoolPeriod);

    //console.log("YEAR: ", academicYear, " TERM: ", academicTerm, " ID: ", selectedSchoolPeriod.schoolPeriodId);

    this.setState({
      tuitionListBySchoolPeriod: tuitionList.filter(
        (tuition) =>
          tuition.schoolPeriodId === selectedSchoolPeriod.schoolPeriodId
      ),
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      academicTerm,
      academicYear,
      tuitionListBySchoolPeriod,
    } = this.state;

    return (
      <Container fluid>
        <Header header="Tuition Update" />
        <CurrentSchoolPeriodBar />
        <Row>
          <Col md={6} xs={12}>
            <AddTuitionForm />
          </Col>
          <Col md={6} xs={12}>
            <h3>Tuition</h3>
            <Form onSubmit={this.handleSubmit}>
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
              <Button type="submit" variant="primary" block>
                Filter
              </Button>
            </Form>
            <br />
            <Row className={styles.subSection}>
              {tuitionListBySchoolPeriod.map((tuition) => (
                <Col key={tuition.id} md={6} xs={12}>
                  <h5>{tuition.gradeLevelName}</h5>
                  <ul>
                    <li>Tuition - GHC {tuition.costOfTuition}</li>
                    <li>
                      Book & Stationery - GHC {tuition.costOfBooksAndStationery}
                    </li>
                    <li>Misc Items - GHC {tuition.costOfMiscItems}</li>
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tuitionList: selectTuitionListByGradeLevel,
  schoolPeriods: selectSchoolPeriods,
  currentSchoolPeriod: selectCurrentSchoolPeriod,
});

//const mapStateToProps = (state)

export default connect(mapStateToProps)(GradeTuition);
