import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../actions';

class Delete extends Component{
  constructor(props){
    super(props);


  }



  renderList(){
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
            {this.renderList()}
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
