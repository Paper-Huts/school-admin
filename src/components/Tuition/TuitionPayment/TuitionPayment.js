import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../stylesheets/pages.module.css";

import Header from "../../CustomComponents/Headers/Header";
import SearchBar from "../../CustomComponents/Search/SearchBar";
import SubHeader from "../../CustomComponents/Headers/SubHeader";
import CurrentSchoolPeriodBar from "../../CustomComponents/CurrentSchoolPeriodBar";
import StudentListTable from '../../CustomComponents/StudentListTable'

import { TuitionPaymentTableHeaderData } from "../../../tests/data/TuitionPaymentData";

import { selectStudentListForTable } from "../../../redux/Students/StudentsSelectors";

class TuitionPayment extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.studentList,
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { data, searchField } = this.state;
    const filteredData = data.filter((item) =>
      item.firstName
        .concat(" ", item.lastName)
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
  
    const { tableHeaderList, btnActions } = TuitionPaymentTableHeaderData;
    
    return (
      <Container fluid>
        <Header header="Pay School Fees" />
        <CurrentSchoolPeriodBar />
        <div className={styles.pageBody}>
          <SearchBar
            placeholder="Search: Student Name"
            controlId="studentNameSearch"
            handleChange={this.handleChange}
          />
          <SubHeader subHeader="Student List" />
          <Row>
            <Col>
            <StudentListTable headerList={tableHeaderList} data={filteredData} btnActions={btnActions} />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  studentList: selectStudentListForTable
});

export default connect(mapStateToProps)(TuitionPayment);
