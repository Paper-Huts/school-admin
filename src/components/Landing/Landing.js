import React, { Fragment } from 'react'
import styles from '../../stylesheets/Landing.module.css'
import { Row } from 'react-bootstrap'

import Header from '../CustomComponents/Header'
import SummaryStatCard from '../CustomComponents/SummaryStats'

const Landing = ({ header, summaryStats }) => (
  <Fragment>
    <Header header={header} />
    <Row className={styles.summaryStatContainer}>
      {summaryStats.map(({ value, title }) => (
        <SummaryStatCard value={value} desc={title} />
      ))}
    </Row>
  </Fragment>
)

export default Landing