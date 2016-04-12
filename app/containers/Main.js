import React, { Component } from 'react';
import { main } from '../styles';


class Main extends Component {
  constructor (){
    super();
  }
  
  render(){
    return (
      <div style = {main}> 
        <h1>Main JS Header</h1>
        {this.props.children}
      </div>
    )
  }
}


Main.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

export default Main;