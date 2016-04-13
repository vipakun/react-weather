import React from 'react';
import { homeButton, headerBar, cleverTitle, headerRight } from '../styles';

function Header (props) {
  return (
    <div style={headerBar} >
      <h2 style={cleverTitle}>Clever Title</h2>
      <div style={headerRight}>
        <input className="form-control" placeholder = 'Chicago, IL' />

        <button className= "btn btn-success" style={homeButton}>Get Weather</button>

      </div>
    </div>
  )
}

export default Header;