import React from 'react';
import { homeBackground } from '../styles';

var Home = React.createClass({
  render: function(){
    return (
      <div className="jumbotron col-sm-12 text-center" style= {homeBackground}>
        <h1>Hello</h1>

      </div>
    )
  }
});

export default Home;