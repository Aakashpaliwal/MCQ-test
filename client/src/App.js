import React, { Component } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'react-popper';
import {Route,Link} from  'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import UpperNavbar from './Components/UpperNavbar/UpperNavbar';
import question2 from './Components/Home/question2';
import question3 from './Components/Home/question3';
class App extends Component {
  render() {
    return (
      <div>
      <UpperNavbar />
       <Navbar />
       <Route path = "/" exact component = {Home} />
        <Route path = "/question2" exact = {true} component = {question2}/>
        <Route path = "/question3" exact = {true} component = {question3}/>
      <Footer />
      </div>
    );
  }
}

export default App;
