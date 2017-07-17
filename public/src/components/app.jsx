import React, { Component } from 'react';
import Chat from './Chat.jsx';

class App extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <h1>React Chat component</h1>
        <p>You can insert this chat component anywhere.</p>
        <Chat />
      </div>
    )
  }
}

export default App;
