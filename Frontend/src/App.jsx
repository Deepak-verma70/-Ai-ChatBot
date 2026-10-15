
import './App.css';
import Sidebar from './Sidebar';
import Chatwindow from './Chatwindow';
import Chat from './Chat';
import { MyContext } from './MyContext';
import { useState } from 'react';
import {v1 as uuidv1} from "uuid";


function App() {
  const [prompt,setPrompt] = useState("");
  const [reply,setReply] = useState(null);
  const [currThreadId,setCurrThreadId] = useState(uuidv1());
  let [previousChat,setPrevousChat] = useState([]); // store all chats of curr thread
let [newChat,setNewChat] = useState(true);

  const providerValues = {
    prompt,setPrompt,
    reply,setReply,
    currThreadId,setCurrThreadId,
    previousChat,setPrevousChat,
    newChat,setNewChat,

  };
  
  return (
    
    <div className='app'>
      <MyContext.Provider value={providerValues}>
      <Sidebar/>
    <Chatwindow/>
  
  </MyContext.Provider>
    </div>
    
  )
}

export default App;
