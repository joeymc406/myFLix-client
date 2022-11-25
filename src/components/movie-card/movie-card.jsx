import React from 'react';

export class MovieCard extends React.Component {

  render() {
    
    return <div className="movie-card" onClick={() => { this.state.selectedMovie = movie;
    }}>{this.props.movie.Title}</div>;
  }
}