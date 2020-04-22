import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../stylesheets/StudentApplications.module.css'
import LargeButton from '../CustomComponents/LargeButton'

const StudentApplications = ({options}) => (
  <Container fluid>
    <Row className={styles.optionsBar}>
      {options.map(option => 
        <Col key={option.id}>
          <LargeButton label={option} />
        </Col>
      )}
    </Row>
  </Container>
)

export default StudentApplications