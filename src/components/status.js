import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Status extends Component {
  render(){
    return (
      <div>
        <Link to="/">
          <button className="btn btn-danger">Back</button>
        </Link>
      </div>
    );
  }
}
