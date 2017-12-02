import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  render() {
    return(
      <div>
        <input className="form-control form-control-lg search_input" value={this.props.word} onChange={this.props.onChangeWord} type="text" placeholder="Search ..."/>
        <button type="button" onClick={this.props.onClickSearch} className="btn btn-primary btn-lg">Search</button>
      </div>
    )
  }
}

export default Search;
