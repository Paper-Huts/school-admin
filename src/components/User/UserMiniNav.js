import React from 'react'
import { Tab, Nav, Row, Col } from 'react-bootstrap'
import UploadCollection from './Admin/UploadCollection'
import TodoList from './Admin/TodoList'

const options = {
  '1231341': { id: '1231341', title: 'Recently Worked On' },
  'sdfsdgaf': { id: 'sdfsdgaf', title: 'Saved for Later' },
  'sdfgsdf': { id: 'sdfgsdf', title: 'Updates' },
  'hehrgrge': { id: 'hehrgrge', title: 'ToDo', component: <TodoList /> },
  'werwer': { id: 'werwer', title: 'Upload Files', component: <UploadCollection /> },
}

const UserMiniNav = () => {
  const items = Object.values(options)
  console.log(items[0].id)

  return (
    <Tab.Container id='userMiniNav' defaultActiveKey={items[0].id}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {items.map(({id, title}) => (
              <Nav.Item key={`tab-${id}`}>
                <Nav.Link eventKey={id}>{title}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {items.map(({id, title, component}) => (
              <Tab.Pane eventKey={id} key={`content-${id}`}>{component ? component : title}</Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default UserMiniNav
