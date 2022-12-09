import React from 'React'
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';


import PropTypes from 'prop-types';

import "./registration-view.scss";

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail] = useState('');
    const [ birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('username', ' Password')

        props.onRegister(username);
    };

return (
  <Container>
    <Row>
      <Col>
        <CardGroup>
          <Card>
            <CardBody>
              <Card.Title>Register Here!</Card.Title>
              <Form>
                <Form.Group>
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
                  <Form.Label>
                    <Form.Control
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="enter your email address"
                    />
                  </Form.Label>
                  <Form.Label>
                    <Form.Control
                      type="text"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      placeholder="enter your birthdate"
                    />
                  </Form.Label>
                  <Button type="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  </Container>
);
}

RegistrationView.propTypes = {
    onRegister: PropTypes.func.isRequired
};