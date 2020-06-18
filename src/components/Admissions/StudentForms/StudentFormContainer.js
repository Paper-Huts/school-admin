import React, { Component, Fragment } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import PersonalInformation from './PersonalInformation'
import styles from '../../../stylesheets/CustomComponents.module.css'
import GuardianInformation from './GuardianInformation'
import RegistrationInformation from './RegistrationInformation'
import CurrentSchoolPeriodBar from '../../CustomComponents/CurrentSchoolPeriodBar'

class StudentFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      defaultTab: 'personalInformation',
      personalInformation: {
        title: 'personalInformation',
        formItems: {
          firstName: '',
          lastName: ''
        }
      }
    }
  }

  render() {
    const {defaultTab, personalInformation: { formItems }} = this.state

    return (
      <Fragment>
        <CurrentSchoolPeriodBar />
        <Container>
          <Tabs defaultActiveKey={defaultTab} className={styles.tabs + ' nav-justified'} variant='pills'>
            <Tab eventKey='personalInformation' title='Personal Information'>
              <PersonalInformation formItems={formItems} handleChange={this.handleChange} />
            </Tab>
            <Tab eventKey='guardianInformation' title='Guardian Information'>
              <GuardianInformation />
            </Tab>
            <Tab eventKey='registrationInformation' title='Registration Information'>
              <RegistrationInformation />
            </Tab>
          </Tabs>
        </Container>
      </Fragment>
    )
  }
}

export default StudentFormContainer