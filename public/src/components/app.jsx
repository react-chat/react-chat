import React, { Component } from 'react';
import ChatWindow from './chatWindow.jsx';

class App extends Component {
  constructor(props){
    super(props);


  }

  render(){
    return (
      <div>
        <ChatWindow className="chatWindow"/>
      </div>
    )
  }
}

export default App;
