import React from 'react'
import { Container } from 'react-bootstrap'
import OptionsBar from '../CustomComponents/Lists/OptionsBar'

const Admissions = ({ options }) => (
  <Container fluid>
    {console.log(options)}
    <OptionsBar options={options} />
  </Container>
)

export default Admissions