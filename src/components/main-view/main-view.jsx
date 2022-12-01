import React from 'react';
import axios from 'axios';
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
      movies: [],
        selectedMovie: null
      };
    }

    componentDidMount(){
      console.log('start')
      axios.get('https://joeymc406movie-api.onrender.com/movies')
      .then(response => {
        console.log(response.data)
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    }

    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }
  

  render () {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className="main-wiew">The list is empty!</div>

    return (
      <div className="main-view">
        {selectedMovie
        ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie);}}/>
        : movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie)}}/>
        ))
        }
      </div>
    );
  }
}