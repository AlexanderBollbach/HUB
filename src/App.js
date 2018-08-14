import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MainLayout from "./MainLayout/MainLayout";
import Demos from "./Demos/Demos";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Banner from "./Banner";

console.log("test");

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Banner />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/demos" component={Demos} />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
