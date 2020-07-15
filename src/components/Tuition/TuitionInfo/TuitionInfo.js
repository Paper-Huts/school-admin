import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../CustomComponents/Header";
import CurrentSchoolPeriodBar from "../../CustomComponents/CurrentSchoolPeriodBar";
import AddTuitionForm from "./AddTuitionForm";

import { selectTuitionListByGradeLevel } from "../../../redux/Tuition/TuitionSelectors";

import styles from "../../../stylesheets/CustomComponents.module.css";
import {
  selectSchoolPeriods,
  selectCurrentSchoolPeriod,
} from "../../../redux/SchoolPeriod/SchoolPeriodSelectors";

class TuitionInfo extends React.Component {
  state = {
    academicYear: this.props.currentSchoolPeriod.academicYear,
    academicTerm: this.props.currentSchoolPeriod.academicTerm,
    tuitionListBySchoolPeriod: this.props.tuitionList,
    showTuitionModal: false,
  };

  handleClose = () => {
    this.setState({ showTuitionModal: false });
  };

  handleShow = () => {
    this.setState({ showTuitionModal: true });
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
      showTuitionModal,
    } = this.state;

    return (
      <Container fluid>
        <Header header="Tuition Infomation" />
        <CurrentSchoolPeriodBar />
        <h3>Tuition</h3>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm="4">
              <Form.Group as={Row} controlId="formAcademicYear">
                <Form.Label column sm="5">
                  For Acadamic Year:
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    as="select"
                    size="sm"
                    custom
                    name="academicYear"
                    onChange={this.handleChange}
                    defaultValue={academicYear}
                  >
                    <option value="2019/2020">2019/2020</option>
                    <option value="2018/2019">2018/2019</option>
                    <option value="2017/2018">2017/2018</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Col>
            <Col sm="4">
              <Form.Group as={Row} controlId="formTerm">
                <Form.Label column sm="4">
                  For Term:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    as="select"
                    size="sm"
                    custom
                    name="academicTerm"
                    onChange={this.handleChange}
                    defaultValue={academicTerm}
                  >
                    <option value={3}>Three</option>
                    <option value={2}>Two</option>
                    <option value={1}>One</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Col>
            <Col sm="2">
              <Button type="submit" variant="primary" block size="sm">
                Filter
              </Button>
            </Col>
            <Col sm="2">
              <Button onClick={this.handleShow} variant="primary" block size="sm">
                Add/Edit Tuition
              </Button>
            </Col>
          </Row>
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
        <AddTuitionForm show={showTuitionModal} onHide={this.handleClose} />
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

export default connect(mapStateToProps)(TuitionInfo);
