import React, { Component } from 'react';

class ChatMessages extends Component {
    constructor(){
      super();
      this.state = {
        messages: []
      }
    }

    render(){
      return (
        <div>
          <h1>chat messages here</h1>
        </div>
      )
    }
}

export default ChatMessages;
