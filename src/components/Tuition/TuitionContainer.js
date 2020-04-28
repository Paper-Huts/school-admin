import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import Tution from './Tuition'
import CurrentSchoolPeriodBar from '../CustomComponents/CurrentSchoolPeriodBar'
import Header from '../CustomComponents/Header'

class TuitionContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pageInfo: {
        title: 'School Fees',
        subSections: [
          {
            subheader: 'School Fees Information',
            paragraphInfo: [
              {
                listHeader: 'Nursery & KG',
                listItems: ['Tuition - GHC 200','Book & Stationery - GHC 50','Toiletries - GHC 50']
              },
              {
                listHeader: 'Primary School',
                listItems: ['Tuition - GHC 250','Book & Stationery - GHC 70','Toiletries - GHC 20']
              }
            ]
          }
        ],
        subPages: [
          {
            id: 1,
            title: 'School Fees Payment',
            path: '/tuition/payment'
          },
          {
            id: 2,
            title: 'Payment History',
            path: '/tuition/payment-history'
          }
        ]
      },
      summaryStats: [
        {id: '2', title: 'Total Amount of School Fees Owed', value: 7000},
        {id: '3', title: 'Number of Students in Arrears', value: 30}
      ],
      period: [
        {id: 0, title: 'Academic Year', value: '2019/2020'},
        {id: 1, title: 'Current Term', value: 3},
        {id: 2, title: 'Date', value: 'April 1st, 2020'}
      ]
    }    
  }

  render() {

    const { summaryStats, period, ...otherPageInfo } = this.state;
    const { pageInfo } = this.state;

    return (
      <Container fluid>
        <Header header={pageInfo.title} />
        <CurrentSchoolPeriodBar period={period} />
        <Tution summaryStats={summaryStats} {...otherPageInfo} />
      </Container>
    )
  }
}

export default TuitionContainer;