import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import statement that you need to bundle ./index.scss

//importing of reactboostrap Row
import Row from 'react-bootstrap/Row';
//importing of reactbootstrap Column
import Col from 'react-bootstrap/Col';

//imprt of mainview.scss
import './main-view.scss';
//importing of registration-view
import { RegistrationView } from '../registration-view/registration-view'
//importing of login-view to main-view
import { LoginView } from '../login-view/login-view';
//importing of movie-card to main-view
import { MovieCard } from '../movie-card/movie-card';
//importing of movie-wiew to main-view
import { MovieView } from '../movie-view/movie-view';

export function MainView() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [registered, setRegistered] = useState(true)

  useEffect(() => {
    axios.get('https://joeymc406movie-api.onrender.com/movies')
          .then(response => {
            console.log(response.data)
            setMovies(response.data)
          })
          .catch(error => {
            console.log(error);
          });
  },[])

  if(!registered) {
    return <RegistrationView/>
  }

  if(!user) {
    return (
      <LoginView onLoggedIn={user => setUser(user)}
    onRegister={(registered) => setRegistered(registered)}/>
    )
  }

  if(movies.length === 0) return <div className="MainView">The list is emtpy!</div>

  return (
    <div className="main-view">

    return (
      <Row className="main-view justify-content-md-center">
        { selectedMovie
          ? (
            <Col md={8}>
              <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie);}}/>
            </Col>
            )
          : movies.map(movie => (
            <Col md={8}>
              <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            </Col>
        ))
      }
      </Row>
    );   
  }
}  



