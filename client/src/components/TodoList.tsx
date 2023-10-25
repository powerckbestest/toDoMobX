import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import todos from '../store/todo';

function TodoList(): JSX.Element {
  return (
    <div style={{ border: '1px solid black', borderRadius: '5%', marginTop: '5px' }}>
      <h1 style={{ textAlign: 'center' }}>TodoList:</h1>
      {todos.toDos.map((el) => (
        <div key={el.id}>
          <Card
            style={{
              width: '18rem',
              textAlign: 'center',
              margin: '20px',
            }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item>{el.name}</ListGroup.Item>
              <Form.Check
                type="switch"
                id="custom-switch"
                onChange={() => todos.toggleTodo(el.id)}
              />
              <Button
                variant={el.status === true ? 'success' : 'danger'}
                onClick={() => todos.removeTodo(el.id)}
              >
                Delete
              </Button>
            </ListGroup>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default observer(TodoList);
