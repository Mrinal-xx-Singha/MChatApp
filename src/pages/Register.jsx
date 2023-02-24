import React from 'react'
import Folder from '../image/folder.png'




const Register = () => {
  return (
    <div className='form__Container'>
        <div className='form__Wrapper'>
            <span className='logo'>Mchat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email'/>
                <input  type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor='file'>
                    <img src={Folder} alt="" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have an account ? Login</p>
        </div>
    </div>
  )
}

export default Register
