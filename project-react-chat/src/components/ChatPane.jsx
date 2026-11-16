import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json';
import USERS from '../data/users.json';

export function ChatPane(props) {
  console.log("rendering chatpane")
  const { currentChannel } = props;

  const [count, setCount] = useState(6);
  // const count = stateResult[0]; //what is on the board
  // const setCount = stateResult[1]; //name of the magic pen
  const [messageObjArray, setMessageObjArray] = useState(INITIAL_CHAT_LOG)

  //data: an array of message objects [{}, {}]
  //const messageObjArray = INITIAL_CHAT_LOG

  const handleClick = (event) => {
    console.log("you clicked me");
    addMessage(USERS[1], "I'm from a button!", "general");

    setCount(count+1); //1. update the board
                       //2. rerender the component

  }

  // DATA MANAGEMENT: how do we change
  const addMessage = (userObj, messageText, channel) => {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    console.log(newMessage);
    const newMessageArray = [...messageObjArray, newMessage];
    setMessageObjArray(newMessageArray);

    // messageObjArray.push(newMessage)
    // console.log(messageObjArray);
  }

  /* RENDERING: what do we look like */

  //Step 1. data processing
  //data: an array of message objects [{}, {}]
  //sorted and filtered
  const channelMessages = messageObjArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp) //reverse chron order
    .filter((msgObj) => { //channel messages only
      return msgObj.channel === currentChannel;
    })

  //Step 2. convert data to views
  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageItem messageData={chatObj} key={chatObj.timestamp} />
      return elem; //put it in the new array!
  });

  return (
    <>
      <div className="scrollable-pane pt-2 my-2">
        {/* button demo */}
        <div className="mb-2">
          <button 
            className="btn btn-success" 
            onClick={handleClick}
          >
              Add a message! {count}
          </button>
        </div>
        <hr/>

        {/* conditional rendering */}
        { messageItemArray.length === 0 && 
          <p>No messages yet</p>
        }

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm 
        currentChannel={currentChannel} 
        howToAddMessageFunc={addMessage}
        currentUser={USERS[1]}
      />
      </>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button">
          {/* <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span> */}
      </button>
    </div>
   </div> 
  )
}
