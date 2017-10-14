import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePending, changeCompleted } from '../actions';

class Status extends Component {
  renderPending(){
      return this.props.pending.map((element) => {
      return(
        <li
          className="list-group-item"
          key={element}
          onClick={() => this.props.changePending(element)}
          >{element}</li>
      )
    });
  }

  renderCompleted(){

    return this.props.completed.map((element) => {
      return(
        <li
          className="list-group-item"
          key={element}
          onClick={() => this.props.changeCompleted(element)}
          >{element}</li>
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

        <div><h1>Click to modify</h1></div>

        <div className="row">
          <div className="col-xs-6">
            <h3>Pending</h3>
            <Link to="/status">
              <ul className="list-group">
                {this.renderPending()}
              </ul>
            </Link>
          </div>

          <div className="col-xs-6">
            <h3>Completed</h3>
            <Link to="/status">
              <ul className="list-group">
                {this.renderCompleted()}
              </ul>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    changePending,
    changeCompleted
  }, dispatch)
}

function mapStateToProps(state){
  return {
    pending: state.pending,
    completed: state.completed
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Status);
