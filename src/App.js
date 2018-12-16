import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import ReservationForm from './ReservationForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <NavBar />
        <ReservationForm />
      </div>
    );
  }
}

export default App;
