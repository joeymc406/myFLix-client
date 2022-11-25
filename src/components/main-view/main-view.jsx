import React from 'react';

//import statement that you need to bundle ./index.scss
import '../../index.scss';
//importing of movie-card to main-view
import { MovieCard } from '../movie-card/movie-card';
//importing of movie-wiew to main-view
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
      { _id: 1, Title: 'Inception', Description: 'description 1', ImagePath: 'img1'},
      { _id: 2, Title: 'John Wick', Description: 'description 2', ImagePath: 'img2'},
      { _id: 3, Title: 'John wick 2', Description: 'description 3', ImagePath: 'img3'}
        ],
        selectedMovie: null
      };
    }

    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }
  

  render () {
    const { movies, selectedMovie } = this.state;

    if (selectedMovie) return <MovieView movie={selectedMovie} />;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setState({ selectedMovie: newSelectedMovie});}} />)}
      </div>
      );
    }
  }