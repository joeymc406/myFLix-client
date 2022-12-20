import React from 'react';
//importing of reactboostrap Row
import Row from 'react-bootstrap/Row';
//importing of reactbootstrap Column
import Col from 'react-bootstrap/Col';
//importing of useState and useEffect
import { useEffect, useState }from 'react';
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

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://joeymc406movie-api.onrender.com/movies", {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then((response) => response.json())
    .then((movies) => {
      setMovies(movies);
    });
  }, [token]);

    //   const moviesFromApi = data.docs.map((doc) => {
    //     return{
    //       id: doc.key,
    //       title: doc.title,
    //       image: ``,
    //       author: doc.author_name?.[0]
    //       };
    //   });
    //   setMovies(moviesFromApi);
    //   });
    // }, []);

      if (!user) {
        return (
        <>
          <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }} />
          or 
          <RegistrationView />
        </>
      );
    }
      
      if (selectedMovie) {
        return (
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
      }
      if (movie.length === 0) {
        return <div>The list is empty</div>
      }
      return (
        <div>
          {movies.map((movie) => (
            <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
            />
          ))}
          <div>
            <button className="logout-button" onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
          </div>
        </div>
      );
    };
//export class MainView extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     movies: [],
  //       selectedMovie: null,
  //       user: null,
  //       registered: true,
  //     };
  //   }

  //   componentDidMount(){
  //     console.log('start')
  //     axios.get('https://joeymc406movie-api.onrender.com/movies')
  //     .then(response => {
  //       console.log(response.data)
  //       this.setState({
  //         movies: response.data
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   }

  //   setSelectedMovie(movie) {
  //     this.setState({
  //       selectedMovie: movie
  //     });
  //   }
  
  //   onLoggedIn(user) {
  //     this.setState({
  //       user
  //     });
  //   }

  //   onRegister(registered) {
  //     this.setState({registered});
  
  //   }

  // render () {
  //   const { movies, selectedMovie, user, registered } = this.state;

//     if(!registered) return <RegistrationView/>

//     if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)}
//     onRegister={(registered) => this.onRegister(registered)}/>;

//     if (movies.length === 0) return <div className="main-wiew">The list is empty!</div>

//     return (
//       <Row className="main-view justify-content-md-center">
//         { selectedMovie
//           ? (
//             <Col md={8}>
//               <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie);}}/>
//             </Col>
//             )
//           : movies.map(movie => (
//             <Col md={8}>
//               <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
//             </Col>
//         ))
//       }
//       </Row>
//     );   
//   }
// }  

