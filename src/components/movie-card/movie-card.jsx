import React from 'react';
import "../../index.scss";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    
    return (
    <div className="movie-card mb-3" onClick={() => onMovieClick(movie)}>
      <div>{movie.Title}</div>
      <div>{movie.Description}</div>
    </div>);
  }
}
