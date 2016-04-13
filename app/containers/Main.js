import React, { Component } from 'react';
import { main, headerBar } from '../styles';

import Header from '../components/Header';


class Main extends Component {
  constructor (){
    super();
  }
  
  render(){
    return (
      <div style = {main}> 
        <Header/>
        {this.props.children}
      </div>
    )
  }
}


Main.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

export default Main;