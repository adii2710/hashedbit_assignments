import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const addTodo = () => {
    if (!todoText || !expiryDate) return;
    const newTodo = { id: Math.random(), text: todoText, expiryDate: new Date(expiryDate) };
    setTodos([...todos, newTodo]);
    setTodoText('');
    setExpiryDate('');
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const updatedTodos = todos.filter((todo) => todo.expiryDate > now);
      setTodos(updatedTodos);
    }, 1000 * 60); // Check every minute

    return () => clearInterval(interval);
  }, [todos]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'todoText') {
      setTodoText(value);
    } else if (name === 'expiryDate') {
      setExpiryDate(value);
    }
  };

  return (
    <Container className="py-4">
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <h1 className="text-center mb-4">Todo List</h1>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="todoText"
              placeholder="Add Todo..."
              value={todoText}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="datetime-local"
              name="expiryDate"
              value={expiryDate}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={addTodo} block>
            Add
          </Button>
          <ListGroup className="mt-4">
            {todos
              .sort((a, b) => a.text.localeCompare(b.text))
              .map((todo) => (
                <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
                  {todo.text} - Expires: {todo.expiryDate.toLocaleString()}
                  <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>Delete</Button>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
