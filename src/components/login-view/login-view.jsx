import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./login-view.scss";
import { Card } from 'react-bootstrap';
import { response } from 'express';

export const LoginView = ({ onLoggedIn }) => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            access: username,
            secret: setPassword
        };
        fetch('https://joeymc406movie-api.onrender.com/login', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then ((response) => response.json())
        .then((data) => {
            console.log("Login response:", data)
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else {
                alert("user not found")
            }
        })
        .catch((e) => {
            alert("Something went wrong")
        });
    };


        return (
          <Container className="login-container">
            <Row>
              <Col>
                <CardGroup>
                  <Card>
                    <CardBody>
                      <Card.Title>Log In</Card.Title>
                      <Form onSubmit={handleSubmit}>
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
                        className="submit-button"
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