import React from 'react';


const Main = React.createClass({
  render(){
    return (
      <div className = 'mainHeader'>
        <h1>Main JS Header</h1>
        {this.props.children}
      </div>
    )
  }
});

export default Main;