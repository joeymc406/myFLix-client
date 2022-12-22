import React, { useEffect, useState } from "react";
import axios from "axios";
//importing of reactboostrap Row
import Row from "react-bootstrap/Row";
//importing of reactbootstrap Column
import Col from "react-bootstrap/Col";
//imprt of mainview.scss
import "./main-view.scss";
//importing of registration-view
import { RegistrationView } from "../registration-view/registration-view";
//importing of login-view to main-view
import { LoginView } from "../login-view/login-view";
//importing of movie-card to main-view
import { MovieCard } from "../movie-card/movie-card";
//importing of movie-wiew to main-view
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    if (!token) {
      return;
    }
    axios.get("https://joeymc406movie-api.onrender.com/movies").then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, [token]);

  function onLogin(user, token) {
    setToken(token);
    setUser(user);
  }

  function onRegister() {
    setShowRegister(false);
  }

  if (showRegister) {
    return <RegistrationView onRegister={onRegister} />;
  }

  if (!user) {
    return (
      <>
        <LoginView onClickNavToRegister={setShowRegister} onLogIn={onLogin} />
      </>
    );
  }

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }
  if (movies.length === 0) {
    return <div>The list is empty</div>;
  }
  return (
    <Row>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={setSelectedMovie}
        />
      ))}
      <div>
        <button
          className="logout-button"
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        >
          Logout
        </button>
      </div>
    </Row>
  );
};
