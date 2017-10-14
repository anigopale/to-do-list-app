import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        home
        <div>
          <Link to="/add">
            <button className="btn btn-primary">Add</button>
          </Link>
          <Link to="">
            <button className="btn btn-danger">Delete</button>
          </Link>
        </div>
      </div>
    );
  }
}
