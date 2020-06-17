import React from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../../../stylesheets/pages.module.css";

import Header from "../../CustomComponents/Header";
import SubHeader from "../../CustomComponents/SubHeader";
import CurrentSchoolPerdiodBar from "../../CustomComponents/CurrentSchoolPeriodBar";

import { selectStudent } from "./../../../redux/Students/StudentSelectors";

const PayStudentFees = ({student, match}) => {
  console.log(student);
  console.log(match.params.studentUid);

  const { first_name, last_name } = student;

  return (
    <Container fluid>
      <Header header="Pay School Fees" />
      <div className={styles.pageBody}>
        <CurrentSchoolPerdiodBar />
        <SubHeader subHeader={`${first_name} ${last_name}`} />
        <Form className={styles.subSection}>
          <br />
          <Row>
            <Form.Group as={Col} controlId="formPaymentAmt">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter amount" />
            </Form.Group>
            <Form.Group as={Col} controlId="formBalanceDue">
              <Form.Label>Balance Due</Form.Label>
              <Form.Control plaintext readOnly defaultValue="GHS 0.00" />
            </Form.Group>
          </Row>
          <br />
          <Row>
            <Form.Group as={Col} controlId="formAcademicYear">
              <Form.Label>For Acadamic Year</Form.Label>
              <Form.Control as="select" custom>
                <option>2019/2020</option>
                <option>2018/2019</option>
                <option>2017/2018</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formTerm">
              <Form.Label>For Term</Form.Label>
              <Form.Control as="select" custom>
                <option>Three</option>
                <option>Two</option>
                <option>One</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <br />
          <Row>
            <Form.Group as={Col} controlId="formPaidBy">
              <Form.Label>Paid By</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formReceipt">
              <Form.Label>Receipt Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Receipt Number" />
            </Form.Group>
          </Row>
          <br />
          <Button type="submit" variant="primary">
            Pay Fees
          </Button>
        </Form>
        <div>
          <SubHeader subHeader={`${first_name} ${last_name} - Payment History`} />
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  student: selectStudent(ownProps.match.params.studentUid)(state),
});

export default connect(mapStateToProps)(PayStudentFees);
