import React, { useState } from "React";
import {
  Form,
  Button,
  Card,
  CardGroup,
  Container,
  Col,
  Row,
  CardBody,
} from "react-bootstrap";
import axios from "axios";

import "./registration-view.scss";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://joeymc406movie-api.onrender.com/users", {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday,
      })
      .then((response) => {
        alert("Registration successful");
        props.onRegister();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="registration-container">
       <Row>
         <Col>
             <Card>
               <Card.Body>
                 <Card.Title>Register Here!</Card.Title>
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>
                      Username:
                      <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength="8"
                        placeholder="username must be 8 characters"
                      />
                    </Form.Label>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>
                      Password:
                      <Form.Control
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="8"
                        placeholder="password must be 8 characters"
                      />
                    </Form.Label>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>
                      <Form.Control
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="enter your email address"
                      />
                    </Form.Label>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>
                      <Form.Control
                        type="text"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        placeholder="enter your birthdate"
                      />
                    </Form.Label>
                    </Form.Group>
                    <Button className="submit-button" type="submit">
                      Submit
                    </Button>
                </Form>
               </Card.Body>
             </Card>
         </Col>
       </Row> 
    </Container>
  );
}

