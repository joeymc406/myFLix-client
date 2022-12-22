import React from 'react';
import PropTypes from 'prop-types';
import "./movie-card.scss";
import { Col,Card, Button } from 'react-bootstrap';


export const MovieCard = ({ movie, onMovieClick }) => {
    
    return (
      <Col md={3}>
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button className="open-button" onClick={() => onMovieClick(movie)} variant="link">
            Open
          </Button>
        </Card.Body>
      </Card>
      </Col>
    );
   }


MovieCard.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isrequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birthyear: PropTypes.string.isRequired
    }),
    Featured: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
