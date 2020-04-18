import React, { Fragment } from 'react'
import styles from '../../stylesheets/Landing.module.css'
import { Row, Col, Card } from 'react-bootstrap'

const Landing = (props) => (
  <Fragment>
    <div className={styles.mainHeader}>
      <h3>{props.header}</h3>
    </div>
    <Row>
      {props.summaryStats.map(stat => (
        <Col md={6}>
          <div className={styles.card}>
            <div className={styles.cardValue}>{stat.value}</div>
            <div className={styles.cardTitle}>{stat.title}</div>
          </div>
        </Col>
      ))}
    </Row>
  </Fragment>
)

export default Landing