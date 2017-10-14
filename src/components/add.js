import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertElement } from '../actions';

class Add extends Component{
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.term);
    this.props.insertElement(this.state.term);
    this.setState({term: ""});
  }

  onInputChange(event){
    this.setState({term: event.target.value});

  }
  render(){
    return(
      <div>
        <Link to='/'>
          <button className="btn btn-danger">back</button>
        </Link>
        <div>
          <h1>Add elements to list</h1>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({ insertElement }, dispatch);
}



export default connect(null, mapDispatchToProps)(Add);
