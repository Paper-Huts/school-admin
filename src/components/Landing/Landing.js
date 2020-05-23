import React, { Fragment } from 'react'
import styles from '../../stylesheets/Landing.module.css'
import { Row } from 'react-bootstrap'

import Header from '../CustomComponents/Header'
import SummaryStatCard from '../CustomComponents/SummaryStats'

const Landing = (props) => (
  <Fragment>
    <Header header={props.header} />
    <Row className={styles.summaryStatContainer}>
      {props.summaryStats.map(stat => (
        <SummaryStatCard value={stat.value} desc={stat.title} />
      ))}
    </Row>
  </Fragment>
)

export default Landing