import React from "react";
import Container from "react-bootstrap/Container";

import Tution from "./Tuition";
import CurrentSchoolPeriodBar from "../CustomComponents/CurrentSchoolPeriodBar";
import Header from "../CustomComponents/Header";

import { pageData } from "../../tests/data/TuitionPageData";

const TuitionContainer = () => {
  const { title } = pageData;

  return (
    <Container fluid>
      <Header header={title} />
      <CurrentSchoolPeriodBar />
      <Tution />
    </Container>
  );
};

export default TuitionContainer;
