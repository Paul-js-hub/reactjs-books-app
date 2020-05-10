import React, { Component } from 'react';
import Books from './components/Books';
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class App extends Component {


  render() {
    return (

      <div className="App">
        <Books />
      </div>


    );
  }

}

export default App;
