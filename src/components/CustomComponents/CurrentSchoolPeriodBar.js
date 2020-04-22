import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../../stylesheets/StudentApplications.module.css'

const CurrentSchoolPeriodBar = ({ period }) => (
  <Row>
    {period.map(periodItem => (
      <Col md={4} className={styles.period} key={periodItem.id}>
        <span className={styles.periodTitle}>
          {periodItem.title}
        </span>:&nbsp;&nbsp;
        <span className={styles.periodValue}>
          {periodItem.value}
        </span>
      </Col>
    ))}
  </Row>
)

export default CurrentSchoolPeriodBar