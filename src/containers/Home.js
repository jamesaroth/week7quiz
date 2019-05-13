import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Landing">
            <h2>Welcome to THE week 7 Quiz Answer</h2>
            <Link to='/numbers'>Numbers</Link>
        </div>
      </div>
    )
  }
}

export default Home;