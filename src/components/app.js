import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { deleteItem } from '../actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props){
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    return this.props.list.map((element) => {
      return (
        <li key={element} className="list-group-item" >
          <div className="input-group">
            <div>{element}</div>
              <span className="input-group-btn">
                <Link to="/"><button onClick={()=> this.props.deleteItem(element)} className="btn btn-danger pull-xs-right">Delete</button></Link>
              </span>
            </div>
        </li>
      );
    })

  }

  render() {

    console.log("app's props:",this.props.list);

    if(this.props.list.length==0){
      return(
      <div>
        <h1>Home</h1>
        <div>
          <Link to="/add">
            <button className="btn btn-primary">Add</button>
          </Link>
          <Link to="/delete">
            <button className="btn btn-danger">Delete</button>
          </Link>
        </div>
          <div><h3>Nothing to show</h3></div>
        </div>
      )
    }


    return (
      <div>
        <h1>Home</h1>
        <div>
          <Link to="/add">
            <button className="btn btn-primary">Add</button>
          </Link>
          <Link to="/delete">
            <button className="btn btn-danger">Delete</button>
          </Link>

          <h3>List</h3>

          <div>
            <ul className="list-group">
              {this.renderList()}
            </ul>
          </div>
          <Link to="/status">
            <button className="btn btn-secondary">Status</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteItem }, dispatch);
}
function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
