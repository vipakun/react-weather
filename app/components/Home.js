import React from 'react';
import { homeBackground } from '../styles';

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
    <div style={homeBackground}>
      <h1>Enter a City or Country</h1>

    </div>
  )
}

export default Home;