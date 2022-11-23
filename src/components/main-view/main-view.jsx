import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './src/components/main-view/main-view';

//import statement that you need to bundle ./index.scss
import './index.scss';

export class MainView extends React.Component {

  render () {
    return (
      <div className="main-view">
        <div>Inception</div>
        <div>The Shawshank Redemption</div>
        <div>Gladiator</div>
      </div>
    );
  }
}