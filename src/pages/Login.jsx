import React from 'react'

const Login = () => {
  return (
    <div className='form__Container'>
    <div className='form__Wrapper'>
        <span className='logo'>Mchat</span>
        <span className='title'>Register</span>
        <form>
            <input type="email" placeholder='email'/>
            <input  type="password" placeholder='password'/>
            <input style={{display:"none"}} type="file" id="file"/>
            
            <button>Sign in</button>
        </form>
        <p>You don't have an account ? Register</p>
    </div>
</div>
  )
}

export default Login
