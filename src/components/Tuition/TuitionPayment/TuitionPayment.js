import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../stylesheets/pages.module.css";

import Header from "../../CustomComponents/Header";
import SearchBar from "../../CustomComponents/Search/SearchBar";
import SubHeader from "../../CustomComponents/SubHeader";
import CurrentSchoolPeriodBar from "../../CustomComponents/CurrentSchoolPeriodBar";
import DataTable from '../../CustomComponents/DataTable'

import StudentNameList from "../../../tests/MOCK_DATA_Student_Names.json";

class TuitionPayment extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      searchField: "",
      period: [
        { id: 0, title: "Academic Year", value: "2019/2020" },
        { id: 1, title: "Current Term", value: 3 },
        { id: 2, title: "Date", value: "April 1st, 2020" },
      ],
      tableHeaderList: [
          'ID Number',
          'Student Name',
          ''
      ],
      btnActions: [
          'Pay Fees'
      ]
    };
  }

  componentDidMount() {
    this.setState({ data: StudentNameList });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { data, searchField, period, tableHeaderList, btnActions } = this.state;
    const filteredData = data.filter((item) =>
      item.first_name
        .concat(" ", item.last_name)
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );

    return (
      <Container fluid>
        <Header header="Pay School Fees" />
        <CurrentSchoolPeriodBar period={period} />
        <div className={styles.pageBody}>
          <SearchBar
            placeholder="Search: Student Name"
            controlId="studentNameSearch"
            handleChange={this.handleChange}
          />
          <SubHeader subHeader="Student List" />
          <Row>
            <Col>
            <DataTable headerList={tableHeaderList} data={filteredData} btnActions={btnActions} />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default TuitionPayment;
