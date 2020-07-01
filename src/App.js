import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Books from "./components/Books/index";
import Register from "./components/Register/index";
import NavHeader from "./components/Header/index";
import Login from "./components/Login/index";
import { SmartToaster, toast } from 'react-smart-toaster';
import 'antd/dist/antd.css';
import AddBook from "./components/AddBook";
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <SmartToaster
                    store={toast}
                    lightBackground={true}
                    position={"top_right"}
                />
        <BrowserRouter>
          <NavHeader />
          <Switch>
            <Route path="/" component={Books} exact />
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/addbook" component={AddBook}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
