import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Delete extends Component{
  constructor(props){
    super(props);


  }



  renderList(){
    if(this.props.list.length == 0){
      return(
        <div>Nothing to delete</div>
      )
    }
    return this.props.list.map((item) => {
      return (
        <li
          key={item}
          onClick={() => this.props.deleteItem(item)}
          className="list-group-item">
            {item}
        </li>
      );
    });
  }




  render(){
    console.log("delete's props:",this.props.list);
    return(
      <div>
        <Link to='/'>
          <button className="btn btn-danger">Back</button>
        </Link>
        <div>
          <h1>Click To Delete</h1>
        </div>
        <Link to='/delete'>
          <ul className="list-group">
            <ReactCSSTransitionGroup
              transitionName="delete"
              transitionEnterTimeout="500"
              transitionLeaveTimeout="500"
              >
              {this.renderList()}
            </ReactCSSTransitionGroup>
          </ul>
        </Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteItem }, dispatch);
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps,mapDispatchToProps)(Delete);
