import React from 'react'
import { Container } from 'react-bootstrap'
import Landing from './Landing'
import { createStructuredSelector } from 'reselect'
import { selectSummaryStats } from '../../redux/SchoolStats/SchoolStatsSelectors'
import { connect } from 'react-redux'

const LandingContainer = ({ summaryStats }) => (
  <Container fluid>
    <Landing summaryStats={summaryStats} header='Student Database Management System' />
  </Container>
)

const mapStateToProps = createStructuredSelector({
  summaryStats: selectSummaryStats
})

export default connect(mapStateToProps)(LandingContainer)