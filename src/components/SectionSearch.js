import React, { Component } from 'react';
import './SectionSearch.css'
import {Link} from 'react-router-dom'

class  SectionSearch extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark section">
        <ul className="navbar-nav nav-section">
          <li className="nav-item active">
            <Link to="/Sports" className="nav-link text-sec"
              onClick={() =>this.props.onClickSearch1('Sports')}>Sports</Link>
          </li>
          <li className="nav-item">
            <Link to="/Music" className="nav-link text-sec">Music</Link>
          </li>
          <li className="nav-item">
            <Link to="/Movies" className="nav-link text-sec">Movies</Link>
          </li>
          <li className="nav-item">
            <Link to="/Politics" className="nav-link text-sec">Politics</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default SectionSearch;
