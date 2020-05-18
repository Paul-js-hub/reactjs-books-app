import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Books from "./components/Books";
import Register from "./components/Register";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Books} exact />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
