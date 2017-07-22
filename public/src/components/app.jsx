import React, { Component } from 'react';
import ReactChat from './react-chat.jsx';

class App extends Component {
  constructor(props){
    super(props);


  }

  render(){
    return (
      <div>
        <ReactChat className="chatWindow"/>
      </div>
    )
  }
}

export default App;
