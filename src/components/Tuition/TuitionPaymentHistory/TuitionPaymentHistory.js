import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container, Row, Col } from "react-bootstrap";

import styles from "../../../stylesheets/pages.module.css";

import Header from "../../CustomComponents/Header";
import CurrentSchoolPeriodBar from "../../CustomComponents/CurrentSchoolPeriodBar";
import SearchBar from "../../CustomComponents/Search/SearchBar";
import StudentTuitionPaymentHistoryTable from "../../CustomComponents/StudentTuitionPaymentHistoryTable";

import { selectTuitionPaymentRecords } from "../../../redux/Tuition/TuitionSelectors";

class TuitionPaymentHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.paymentRecords,
      searchField: ""
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { data, searchField } = this.state;
    const filteredData = data.filter((item) =>
      item.studentUid
        .concat(" ", item.paidBy, item.receiptNumber)
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );

    return (
      <Container fluid>
        <Header header="Payment History" />
        <CurrentSchoolPeriodBar />
        <div className={styles.pageBody}>
          <SearchBar
            placeholder="Search: Student name, payer, id"
            controlId="paymentHistorySearch"
            handleChange={this.handleChange}
          />
          <Row>
            <Col>
              <StudentTuitionPaymentHistoryTable data={filteredData} />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  paymentRecords: selectTuitionPaymentRecords
});

export default connect(mapStateToProps)(TuitionPaymentHistory);
