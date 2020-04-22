import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../stylesheets/StudentApplications.module.css'
import LargeButton from '../CustomComponents/LargeButton'

const StudentApplications = ({options}) => (
  <Container fluid>
    <Row className={styles.optionsBar}>
      {options.map(({id, title, path}) => 
        <Col key={id}>
          <LargeButton label={title} path={path} />
        </Col>
      )}
    </Row>
  </Container>
)

export default StudentApplications