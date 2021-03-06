import React, { Component } from 'react'

import Landing_Page from '../Landing_Page/index'
import HomePage from '.././HomePage/HomePage'
import SignUp from '.././SignUp/index'

// React Routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// *************

// Custom CSS styling
import './App.css';
// ******************

class App extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "./youtube_iframe_api/index.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Router>
        <div>

          <div className="App" >
          </div>

          <Route exact path="/" component={Landing_Page} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
