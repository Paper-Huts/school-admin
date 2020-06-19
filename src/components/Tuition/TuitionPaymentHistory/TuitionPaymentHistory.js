import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import styles from "../../../stylesheets/pages.module.css";

import Header from "../../CustomComponents/Header";
import CurrentSchoolPeriodBar from "../../CustomComponents/CurrentSchoolPeriodBar";
import PaymentHistoryTable from "../../CustomComponents/PaymentHistoryTable";
import SearchBar from "../../CustomComponents/Search/SearchBar";

import PaymentHistory from "../../../tests/MOCK_DATA_Payment_History.json";

class TuitionPaymentHistory extends Component {
  constructor(props) {
    super();
    this.state = {
      data: PaymentHistory,
      searchField: ""
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { data, searchField } = this.state;
    const filteredData = data.filter((item) =>
      item.first_name
        .concat(" ", item.last_name, item.uid)
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
              <PaymentHistoryTable data={filteredData} />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default TuitionPaymentHistory;
