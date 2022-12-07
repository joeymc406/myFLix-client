import React from 'react';
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


export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
        selectedMovie: null,
        user: null,
        registered: true,
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

    setSelectedMovie(movie) {
      this.setState({
        selectedMovie: movie
      });
    }
  
    onLoggedIn(user) {
      this.setState({
        user
      });
    }

    onRegister(registered) {
      this.setState({registered});
  
    }

  render () {
    const { movies, selectedMovie, user, registered } = this.state;

    if(!registered) return <RegistrationView/>

    if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)}
    onRegister={(registered) => this.onRegister(registered)}/>;

    if (movies.length === 0) return <div className="main-wiew">The list is empty!</div>

    return (
      <div className="main-view">

        { selectedMovie
        
        ? (
          <Row className="justify-content-md-center"> 
            <Col md={8}>
        <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie);}}/>
            </Col>
          </Row>
        )
        : movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie)}}/>
        ))
        }
      </div>
    );
  }
}

