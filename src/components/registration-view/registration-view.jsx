import React from 'React'
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';

import "./registration-view.scss";

export const RegistrationView = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail] = useState('');
    const [ birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch("https://joeymc406movie-api.onrender.com/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if(response.ok) {
                alert("Registration successful");
                window.location.reload();
            } else {
                alert("Registration failed");
            }
        });
    };

return (
  <Container className="registration-container">
    <Row>
      <Col>
        <CardGroup>
          <Card>
            <CardBody>
              <Card.Title>Register Here!</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>
                        Useername:
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
                <Form.Group controlId="formPassword">
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
                <Form.Group controlId="formEmail">
                  <Form.Label>
                    <Form.Control
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="enter your email address"
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="formBirthday">
                  <Form.Label>
                    <Form.Control
                      type="text"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      placeholder="enter your birthdate"
                    />
                  </Form.Label>
                </Form.Group>
                  <Button className="submit-button" type="submit" onClick={handleSubmit}>
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

//RegistrationView.propTypes = {
  //  onRegister: PropTypes.func.isRequired
//};