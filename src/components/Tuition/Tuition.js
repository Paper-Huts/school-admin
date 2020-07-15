import React from "react";

import { Container } from "react-bootstrap";
import styles from "../../stylesheets/pages.module.css";

import Header from "../CustomComponents/Header";
import CurrentSchoolPeriodBar from "../CustomComponents/CurrentSchoolPeriodBar";
import OptionsBar from '../CustomComponents/Lists/OptionsBar'

import { pageData } from "../../tests/data/TuitionPageData";

const Tuition = () => {
  const { subPages, title } = pageData;

  return (
    <div className={styles.pageBody}>
      <Container fluid>
        <Header header={title} />
        <CurrentSchoolPeriodBar />
        <OptionsBar options={subPages} />
      </Container>
    </div>
  );
};

export default Tuition;
