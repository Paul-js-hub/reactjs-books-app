import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Books from "./components/Books";
import Register from "./components/Register";
import Header from "./components/Header";
import Login from "./components/Login";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Books} exact />
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
