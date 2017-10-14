import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Status extends Component {
  renderPending(){
    return this.props.pending.map((element) => {
      return(
        <li className="list-group-item" key={element}>{element}</li>
      )
    });
  }

  renderCompleted(){
    return this.props.completed.map((element) => {
      return(
        <li className="list-group-item" key={element}>{element}</li>
      )
    })
  }


  render(){
    console.log(this.props.pending);
    return (
      <div>
        <Link to="/">
          <button className="btn btn-danger">Back</button>
        </Link>
        <div>
          pending
        </div>
        <ul className="list-group">
          {this.renderPending()}
        </ul>
        <div>completed</div>
        <ul className="list-group">
          {this.renderCompleted()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    pending: state.pending,
    completed: state.completed
  };
}

export default connect(mapStateToProps)(Status);
