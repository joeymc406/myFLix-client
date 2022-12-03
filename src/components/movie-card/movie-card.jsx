import React from 'react';
import PropTypes from 'prop-types';
import "../../index.scss";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    
    return (
      <div onClick={() => onMovieClick(movie)} classname="movie-card">{movie.Title}</div>
    //<div className="movie-card mb-3" onClick={() => onMovieClick(movie)}>
      //<div>{movie.Title}</div>
      //<div>{movie.Description}</div>
    //</div>);
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
