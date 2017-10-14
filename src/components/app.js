import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    return this.props.list.map((element) => {
      return (
        <li key={element} className="list-group-item" >{element}</li>
      );
    }, this)

  }

  render() {

    console.log("app's props:",this.props.list);

    return (
      <div>
        home
        <div>
          <Link to="/add">
            <button className="btn btn-primary">Add</button>
          </Link>
          <Link to="/delete">
            <button className="btn btn-danger">Delete</button>
          </Link>
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

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(App);
