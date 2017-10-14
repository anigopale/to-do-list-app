import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

class App extends Component {

  renderList() {
    return _.map(this.props.list, (element) => {
      return (
        <li className="list-group-item">{element}</li>
      );
    });

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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(App);
