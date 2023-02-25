import React from 'react'
import Cam from '../image/Camera.png'
import Add from '../image/Add.png'
import Phone from '../image/Phone.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Mrinal</span>
        <div className='chatIcons'>
        <img  src={Cam} alt=""/>
        <img  src={Add} alt=""/>
        <img  src={Phone} alt=""/>
        </div>
       
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
