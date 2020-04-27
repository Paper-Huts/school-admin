import React, { Component } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import PersonalInformation from './PersonalInformation'
import styles from '../../../stylesheets/CustomComponents.module.css'
import GuardianInformation from './GuardianInformation'

class StudentFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      defaultTab: 'personalInformation',
      tabs: [
        {id: 1, title: 'Personal Information', name: 'personalInformation', items: {
            firstName: {id: 101, label: 'First Name', placeholder: 'First Name', type: 'text', col_size: 3},
            middleName: {id: 102, label: 'Middle Name', placeholder: 'Middle Name', type: 'text', col_size: 3},
            lastName: {id: 103, label: 'First Name', placeholder: 'First Name', type: 'text', col_size: 3}
        }},
        {id: 2, title: 'Guardian Info', name: 'guardianInfo', items: {
          firstName: {id: 101, label: 'First Name', placeholder: 'First Name', type: 'text', col_size: 3},
          middleName: {id: 102, label: 'Middle Name', placeholder: 'Middle Name', type: 'text', col_size: 3},
          lastName: {id: 103, label: 'First Name', placeholder: 'First Name', type: 'text', col_size: 3}
        }},
        {id: 3, title: 'Registration Info', name: 'registrationInfo', items: {
          firstName: {id: 101, label: 'First Name', placeholder: 'First Name', type: 'text', col_size: 3},
          middleName: {id: 102, label: 'Middle Name', placeholder: 'Middle Name', type: 'text', col_size: 3},
          lastName: {id: 103, label: 'First Name', placeholder: 'First Name', type: 'text', col_size: 3}
        }}
      ]
    }
  }

  render() {
    const {defaultTab, tabs} = this.state

    return (
      <Container>
        <Tabs defaultActiveKey={defaultTab} className={styles.tabs + ' nav-justified'}>
          <Tab eventKey='personalInformation' title='personalInformation'>
            <PersonalInformation />
          </Tab>
          <Tab eventKey='guardianInformation' title='guardianInformation'>
            <GuardianInformation />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default StudentFormContainer