import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Add extends Component{
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault();
    this.setState({term: ""});
  }

  onInputChange(event){
    this.setState({term: event.target.value});
    console.log(event.target.value);
  }
  render(){
    return(
      <div>
        <Link to='/'>
          <button className="btn btn-danger">back</button>
        </Link>
        <div>
          Add elements to list
        </div>

        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="what do you wish to do"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Add</button>
          </span>
        </form>
      </div>
    )
  }
}

export default Add;
