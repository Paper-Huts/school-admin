import React from "react";
import Container from "react-bootstrap/Container";
import { Route } from "react-router-dom";

import Tuition from "./Tuition";
import TuitionPayment from "./TuitionPayment/TuitionPayment";
import TuitionPaymentHistory from "./TuitionPaymentHistory/TuitionPaymentHistory";
import PayStudentFees from "./TuitionPayment/PayStudentFees";

const TuitionContainer = ({match}) => {

  return (
    <Container fluid>
      <Route exact path={`${match.path}`} component={Tuition} />
      <Route exact path={`${match.path}/payment`} component={TuitionPayment} />
      <Route exact path={`${match.path}/payment-history`} component={TuitionPaymentHistory} />
      <Route path={`${match.path}/payment/:studentUid`} component={PayStudentFees} />
    </Container>
  );
};

export default TuitionContainer;
