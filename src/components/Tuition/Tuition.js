import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from '../../stylesheets/StudentApplications.module.css'

import SubHeader from '../CustomComponents/SubHeader'
import LargeButton from '../CustomComponents/LargeButton'

const Tuition = ({ pageInfo }) => {

  return (
    <div>
      <Container fluid>
        <Row className={styles.optionsBar}>
          {
            pageInfo.subPages.map(
              ({ id, title, path }) =>
                (<Col>
                  <LargeButton key={id} path={path} label={title} />
                </Col>
                )
            )
          }
        </Row>
        {
          pageInfo.subSections.map(
            ({ subHeader, paragraphInfo }) =>
              (<SubHeader subHeader={subHeader} />)
          )
        }

        <Row className={styles.subSection}>
          <Col>
            <h4>Nuersery & KG</h4>
            <ul>
              <li>Tuition - GHC 200</li>
              <li>Book & Stationery - GHC 50</li>
              <li>Toiletries - GHC 50</li>
            </ul>
          </Col>
          <Col>
            <h4>Primary School</h4>
            <ul>
              <li>Tuition - GHC 250</li>
              <li>Book & Stationery - GHC 70</li>
              <li>Toiletries - GHC 20</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tuition;