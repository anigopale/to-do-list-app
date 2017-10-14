import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Delete extends Component{
  render(){
    return(
      <div>
        <Link to='/'>
          <button className="btn btn-danger">Back</button>
        </Link>
        <div>delete page</div>
      </div>
    )
  }
}

export default Delete;
