import React from 'react';
import ReactDOM from 'react-dom';

//import statement to indicate that you need to bundle ./index.scss
import './index.scss';

//Main component (will eventuallu use all others)
class MyFLixApplication extends React.Component {
  render() {
    return (
      <div className="my-flix">
        <div>Good Morning</div>
      </div>
    );
  }
}

//finds the root of the app
const container = document.getElementsByClassName('app-container') [0];

//tells React to render your app int he root of the DOM element.
ReactDOM.render(React.createElement(MyFlixApplication), container);