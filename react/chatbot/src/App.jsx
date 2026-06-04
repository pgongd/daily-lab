// import { useState, useRef, useEffect } from 'react'
import { useState} from 'react'
import {ChatInput} from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
// import RobotProfileImage from './assets/robot.png';
// import UserProfileImage from './assets/robot.png';
import './App.css'   

function App(){
        const [chatMessages, setChatMessages] = useState([{
            message:'hello',
            sender:'user',
            id: 'id1'
          },{
            message:'Hello! How can I help you?',
            sender:'robot',
            id:'id2'
          }]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];
          return(
            <div className="app-container">
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
