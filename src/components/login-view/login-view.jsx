import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./login-view.scss";
import { Card } from 'react-bootstrap';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        // send a request to the server for authentication
        //then call props.onLoggedIn(username)
        props.onLoggedIn(username);
    };

        return (
          <Container className="login-container">
            <Row>
              <Col>
                <CardGroup>
                  <Card>
                    <CardBody>
                      <Card.Title>Log In</Card.Title>
                      <Form>
                        <Form.Group controlId="formUsername">
                          <Form.Label>Username:</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                          <Form.Label>Password:</Form.Label>
                          <Form.Control
                            type="password"
                            onChange={(e) => setPassword(e.target.vaalue)}
                          />
                        </Form.Group>
                        <Button
                          variant="primary"
                          type="Submit"
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        );
    }