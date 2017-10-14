import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Delete extends Component{
  constructor(props){
    super(props);


  }

  deleteItem(item){
    console.log(item)
  }

  renderList(){
    return this.props.list.map((item) => {
      return (
        <li
          key={item}
          onClick={() => this.deleteItem(item)}
          className="list-group-item">
            {item}
        </li>
      );
    });
  }
  //
  // renderList() {
  //   return this.props.list.map((element) => {
  //     return (
  //       <li
  //         key={}
  //         className="list-group-item"
  //         onClick={this.onItemClick()} >{element}
  //       </li>
  //     );
  //   }, this)
  //
  // }




  render(){
    console.log("delete's props:",this.props.list);
    return(
      <div>
        <Link to='/'>
          <button className="btn btn-danger">Back</button>
        </Link>
        <div>Click to delete</div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { list: state.list };
}

export default connect(mapStateToProps)(Delete);
