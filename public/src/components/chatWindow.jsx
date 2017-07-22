import React from 'react';
import ChatHeader from './chatHeader.jsx';
import ChatMessages from './chatMessages.jsx';
import ChatInputBox from './chatInputBox.jsx';

const ChatWindow = () => (
  <div>
    <ChatHeader />
    <ChatMessages />
    <ChatInputBox />
  </div>
)

export default ChatWindow;
