import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import ReservationForm from './ReservationForm';
import Menu from './Menu';
import './App.css';

const menu = [
  {
    name: 'Le Meat',
    description: 'A small portion of meat on a large white plate',
    price: '$45'
  }, 

  {
    name: 'Le Salad',
    description: 'A small collection of greens and other veggies served with a vinegarette',
    price: '$15'
  },

  {
    name: 'Le Dessert',
    description: 'A 2 x 2 inch cube of chocolate cake with a strawberry',
    price: '$19'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <NavBar />
        <ReservationForm />
        <Menu items={menu} />
      </div>
    );
  }
}

export default App;
