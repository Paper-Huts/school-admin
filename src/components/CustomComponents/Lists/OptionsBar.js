import React from 'react'
import { Row, Col } from 'react-bootstrap'

import styles from '../../../stylesheets/CustomComponents.module.css'

import LargeButton from '../LargeButton'

const OptionsBar = ({ options }) => (
  <Row>
    {console.log(options)}
    {options.map(({id, title, path}) => 
      <Col sm='12' md='6' key={id} className={styles.optionsBar}>
        <LargeButton label={title} path={path} />
      </Col>
    )}
  </Row>
)

export default OptionsBar