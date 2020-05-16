import React, { Component } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

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
      data: [],
      period: [
        { id: 0, title: "Academic Year", value: "2019/2020" },
        { id: 1, title: "Current Term", value: 3 },
        { id: 2, title: "Date", value: "April 1st, 2020" },
      ],
      searchField: ""
    };
  }

  componentDidMount() {
    this.setState({ data: PaymentHistory });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { data, period, searchField } = this.state;
    const filteredData = data.filter((item) =>
      item.first_name
        .concat(" ", item.last_name, item.id)
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );

    return (
      <Container fluid>
        <Header header="Payment History" />
        <CurrentSchoolPeriodBar period={period} />
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
