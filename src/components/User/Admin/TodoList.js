import React, { useState } from 'react'
import { Container, Row, Col, FormControl, Form } from 'react-bootstrap'

const TodoList = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={() => {setTodoList([...todoList, todo]); setTodo(''); }}>
            <FormControl value={todo} onChange={e => setTodo(e.target.value)} />
          </Form>
        </Col>
      </Row>
      <Row>
        {todoList ? todoList.map(item => (
          <Col key={item} lg={12}>{item}</Col>
        )) : ''}
      </Row>
    </Container>
  )
}

export default TodoList
