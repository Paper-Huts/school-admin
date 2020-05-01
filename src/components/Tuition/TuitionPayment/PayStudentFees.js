import React from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../stylesheets/pages.module.css";

import Header from "../../CustomComponents/Header";
import SubHeader from "../../CustomComponents/SubHeader";
import CurrentSchoolPerdiodBar from "../../CustomComponents/CurrentSchoolPeriodBar";

const PayStudentFees = ({ period }) => {

  let { studentId } = useParams()

  return (
    <Container fluid>
      <div className={styles.pageBody}>
        <Header header="Pay School Fees" />
        {/* <CurrentSchoolPerdiodBar period={period} /> */}
        <SubHeader subHeader={studentId} />
        <div>
          <SubHeader subHeader={`${studentId}'s School Fees History`} />
        </div>
      </div>
    </Container>
  );
};

export default PayStudentFees;
