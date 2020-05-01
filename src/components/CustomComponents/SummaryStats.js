import React from 'react'

import { Col, Row } from 'react-bootstrap'

import styles from '../../stylesheets/CustomComponents.module.css'

const SummaryStatCard = ({id, value, desc}) => {
    return(
        <Col key={id} lg={6} md={6} sm={12}>
            <Row className={styles.summaryStatCard}>
                <Col className={styles.summaryStatValue} xs={4} >{ value }</Col>
                <Col className={styles.summaryStatDesc} >{ desc }</Col>
            </Row>
        </Col>
    )
}

export default SummaryStatCard