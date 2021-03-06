import React from 'react';
import { homeBackground, homeHeader, homeButton } from '../styles';

// var Home = React.createClass({
//   render: function(){
//     return (
//       <div className="col-sm-12 text-center" style= {homeBackground}>
//         <h1>Hello</h1>

//       </div>
//     )
//   }
// });


function Home (props) {
  return (
    <div style={ homeBackground }>
      <h1 style={ homeHeader }>Enter a City or Country</h1>
      <div className="col-sm-2">
        <input className="form-control" placeholder = 'Chicago, IL' />
      </div>
      <button className= "btn btn-success" style={homeButton}>Get Weather</button>
    </div>
  )
}

export default Home;