import React from 'react';
import ReactDOM from 'react-dom';

const Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Weather!</div>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));