import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { observer } from 'mobx-react-lite';
import todoStore from '../../store/todo';

function AddTodoForm(): JSX.Element {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newTodo = {
        id: todoStore.toDos.length + 1,
        name: input,
        status: false,
      };
      todoStore.addTodo(newTodo);
      setInput('');
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add todo:</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter task name"
          value={input}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default observer(AddTodoForm);
