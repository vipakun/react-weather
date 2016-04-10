import React, { Component } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
  constructor (){
    super();
  }
  
  render(){
    return (
      <div>

      </div>
    )
  }
}


PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
}
export default PromptContainer;