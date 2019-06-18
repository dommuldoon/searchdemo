import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
};

export default App;
