import React from 'react';
import Container from 'react-bootstrap/Container';
import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view'
import "./index.scss";
//import statement to indicate that you need to bundle ./index.scss

//Main component (will eventually use all others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView/>
      </Container>
    );
  }
}

//finds the root of the app
const container = document.getElementsByClassName('app-container') [0];
const root = createRoot(container); 

//tells React to render your app int he root of the DOM element.
root.render(<MyFlixApplication/>);
