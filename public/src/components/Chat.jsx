import React, { Component } from 'react';
import ChatEntry from './ChatEntry.jsx';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: ''
    }
  }

  render() {
    return (
      <div className='messagePopup'>
      <div className='col-xs-12 messageBox'>
        
          <ul className="msgList">
            {this.state.messages.map((eachMessage, idx) => 
              <ChatEntry key={idx} eachMessage={eachMessage} self={this.props.self} friend={this.props.friend} selfName={this.props.allProps.profile.firstName} friendName={this.props.friendName}/>
            )}
          </ul>
        
      </div>
      <div className='col-xs-12 msgBar'>
        <form className='row sendMessageForm' onSubmit={(e) => this.sendMessage(e)}>
          <div className="col-xs-8 msgInputBar">
            <input className="msgInput" type="text" onChange={this.setMessage} value={this.state.message}/>
          </div>
          <button className="col-xs-3 btn msgSubmit" type="submit">Send</button>
        </form>
      </div>
      </div>
    )
  }

}

export default Chat;