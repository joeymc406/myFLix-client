import React from'react';

import "./movie-view.scss";

import { Button, Row, Col } from 'react-bootstrap';

export const MovieView = ({ movie, onBackClick }) => {



// export class MovieView extends React.Component {

//   keypressCallback(event) {
//     console.log(event.key);
//   }

//   componentDidMoount() {
//     document.addEventListener('keypress', this.keypressCallback); 
//   }

//   compnentWillUnmount() {
//     document.removeEventListener('keypress', this.keypressCallback);
//   }

//   render() {
//     const { movie, onBackClick } = this.props;


    return (
      <Row>
        <Col>
          <div className="movie-view">
            <div className="movie-poster">
              <img src={movie.imagePath} />
            </div>

            <div className="movie-title">
              <span className="label">Title:</span>
              <span className="value">{movie.Title}</span>
            </div>

            <div className="movie-description">
              <span className="label">Description:</span>
              <span className="value">{movie.Description}</span>
            </div>

            <Button className="back-button" onClick={() => onBackClick(null)}>Back</Button>
          </div>
        </Col>
      </Row>
    );
  }
  
