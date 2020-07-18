import React from 'react'
import { Container } from 'react-bootstrap'
import OptionsBar from '../CustomComponents/Lists/OptionsBar'

const Admissions = ({ options }) => (
  <Container fluid>
    <OptionsBar options={options} />
  </Container>
)

export default Admissions