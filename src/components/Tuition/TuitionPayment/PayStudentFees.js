import React from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../../../stylesheets/pages.module.css";

import Header from "../../CustomComponents/Headers/Header";
import SubHeader from "../../CustomComponents/Headers/SubHeader";
import CurrentSchoolPerdiodBar from "../../CustomComponents/CurrentSchoolPeriodBar";
import StudentTuitionPaymentHistoryTable from "../../CustomComponents/StudentTuitionPaymentHistoryTable";

import { selectStudent, selectStudentTuitionOwed } from "./../../../redux/Students/StudentsSelectors";
import { selectSchoolPeriods, selectCurrentSchoolPeriod } from "./../../../redux/SchoolPeriod/SchoolPeriodSelectors";
import { selectStudentTuitionPaymentRecords } from "../../../redux/Tuition/TuitionSelectors";

import { payStudentTuition } from "../../../redux/Tuition/TuitionActions";
import { updateStudentTuitionOwed } from "../../../redux/Students/StudentsActions";

class PayStudentFees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentAmount: 0,
      tuitionOwed: props.studentTuitionOwed,
      academicYear: props.currentSchoolPeriod.academicYear,
      academicTerm: props.currentSchoolPeriod.academicTerm,
      paidBy: "",
      receiptNumber: "",
    };
    this.tuitionOwed = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let timestamp = new Date();
    const { match, schoolPeriods, payStudentTuition, updateStudentTuitionOwed } = this.props;
    const {
      paymentAmount,
      academicYear,
      academicTerm,
      paidBy,
      receiptNumber,
    } = this.state;

    //selects school period id from list of school periods
    const selectedSchoolPeriod = schoolPeriods.find(
      (schoolPeriod) =>
        schoolPeriod.academicYear === academicYear &&
        schoolPeriod.academicTerm === parseInt(academicTerm)
    );

    //creates a tuition payment transaction record
    let studentTuitionPayment = {
      id: timestamp.getTime().toString(),
      studentUid: match.params.studentUid,
      date: timestamp.toDateString(),
      paidBy,
      paymentAmount: paymentAmount,
      tuitionOwed: this.tuitionOwed.current.value,
      schoolPeriodId: selectedSchoolPeriod.schoolPeriodId,
      academicTerm,
      academicYear,
      receiptNumber,
    };

    payStudentTuition(studentTuitionPayment);

    updateStudentTuitionOwed( match.params.studentUid, parseFloat(this.tuitionOwed.current.value));

    this.setState({
      paymentAmount: 0,
      receiptNumber: "",
      tuitionOwed: this.tuitionOwed.current.value
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName } = this.props.student;
    const { tuitionPaymentHistory } = this.props;
    const {
      paymentAmount,
      tuitionOwed,
      paidBy,
      academicTerm,
      academicYear,
      receiptNumber,
    } = this.state;

    //compute new tuition owed
    const tuitionOwedAfterPayment = tuitionOwed - paymentAmount;

    return (
      <Container fluid>
        <Header header="Pay School Fees" />
        <div className={styles.pageBody}>
          <CurrentSchoolPerdiodBar />
          <SubHeader subHeader={`${firstName} ${lastName}`} />
          <Form className={styles.subSection} onSubmit={this.handleSubmit}>
            <br />
            <Row>
              <Form.Group as={Col} controlId="formPaymentAmt">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="paymentAmount"
                  value={paymentAmount}
                  placeholder="Enter amount"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formTuitionOwed">
                <Form.Label>Tuition Owed</Form.Label>
                <Form.Control
                  name="tuitionOwed"
                  plaintext
                  readOnly
                  value={tuitionOwedAfterPayment}
                  ref={this.tuitionOwed}
                />
              </Form.Group>
            </Row>
            <br />
            <Row>
              <Form.Group as={Col} controlId="formAcademicYear">
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
              <Form.Group as={Col} controlId="formTerm">
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
            </Row>
            <br />
            <Row>
              <Form.Group as={Col} controlId="formPaidBy">
                <Form.Label>Paid By</Form.Label>
                <Form.Control
                  type="text"
                  name="paidBy"
                  value={paidBy}
                  placeholder="Enter full name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formReceipt">
                <Form.Label>Receipt Number</Form.Label>
                <Form.Control
                  type="text"
                  name="receiptNumber"
                  value={receiptNumber}
                  placeholder="Enter Receipt Number"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Row>
            <br />
            <Button
              type="submit"
              variant="primary"
              block
            >
              Pay Fees
            </Button>
          </Form>
          <br />
          <div>
            <SubHeader
              subHeader={`${firstName} ${lastName} - Payment History`}
            />
          <Row>
            <Col>
              <StudentTuitionPaymentHistoryTable data={tuitionPaymentHistory} />
            </Col>
          </Row>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  student: selectStudent(ownProps.match.params.studentUid)(state),
  studentTuitionOwed: selectStudentTuitionOwed(ownProps.match.params.studentUid)(state),
  schoolPeriods: selectSchoolPeriods(state),
  currentSchoolPeriod: selectCurrentSchoolPeriod(state),
  tuitionPaymentHistory: selectStudentTuitionPaymentRecords(ownProps.match.params.studentUid)(state),
});

const mapDispatchToProps = dispatch => ({
  payStudentTuition: tuitionPayment => dispatch(payStudentTuition(tuitionPayment)),
  updateStudentTuitionOwed: (studentUid, amount) => dispatch(updateStudentTuitionOwed(studentUid, amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(PayStudentFees);
