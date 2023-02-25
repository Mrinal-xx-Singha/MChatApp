import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
        src="https://images.unsplash.com/photo-1677180820364-ff3a2fcb1fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
        alt=""
         />
        <span>just now</span>
        <div className='messageContent'>
          <p>hello today is a good day to start chatting</p>
          <img src='https://images.unsplash.com/photo-1677309017319-8e4aa666f6f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Message
