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
    Title: PropTypes.string.isrequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isrequired,
      Birthyear: PropTypes.string.isRequired
    }),
    Featured: PropType.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
