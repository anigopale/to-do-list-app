import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertElement } from '../actions';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Add extends Component{
  constructor(props){
    super(props);
    this.state = { term: '', recent: [] };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.rec = 0;
  }


  onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.term);
    this.props.insertElement(this.state.term);
    this.rec = this.state.recent;
    this.setState({ recent:
       _.uniq([...this.rec, this.state.term])
    })
    this.setState({term: ""});
    console.log("state recently added:", this.state.recent)
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  renderRecent(){
    if(this.state.recent.length == 0) {
      return(
        <div>Your recent entries will be shown here</div>
      )
    }

    return this.state.recent.map((recent) => {
      return (
        <li className="list-group-item">{recent}</li>
      )
    })
  }

  render(){
    return(
      <div>
        <Link to='/'>
          <button className="btn btn-danger">Back</button>
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
        <div>Recently added:
          <ul className="list-group">
            <ReactCSSTransitionGroup
              transitionName="add"
              transitionEnterTimeout="500"
              transitionLeaveTimeout="0"
              >
            {this.renderRecent()}
          </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ insertElement }, dispatch);
}



export default connect(null, mapDispatchToProps)(Add);
