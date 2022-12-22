import React, { useState } from "react";
import {
  Card,
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Button,
  CardGroup,
  CardBody,
} from "react-bootstrap";
import axios from 'axios'

import "./login-view.scss";

export function LoginView({ onLogIn, onClickNavToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post("https://joeymc406movie-api.onrender.com/login", { Username: username, Password: password})
    .then(res => {
        console.log(res)
        onLogIn(res.data.user, res.data.token)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <Container className="login-container">
      <Row>
        <Col>
          <CardGroup>
            <Card>
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    className="submit-button"
                    variant="primary"
                    type="Submit"
                  >
                    Submit
                  </Button>
                  <Button
                    className="submit-button"
                    variant="primary"
                    onClick={()=> onClickNavToRegister(true)}
                  >
                    Register
                  </Button>
                   </Form>

            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}
