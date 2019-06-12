import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/posts" component={Posts} />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
