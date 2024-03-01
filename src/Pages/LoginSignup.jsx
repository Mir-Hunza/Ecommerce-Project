import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup =() => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" name="" id="" placeholder='Your Name'/>
                <input type="email" placeholder='Email Address'/>
                <input type="password" placeholder='password' />
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>
                Already have an account? <span>
                    Login here
                </span>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continue, i agree to the terms of use & privacy policy.</p>
                </div>
            </p>
        </div>
    </div>

  )
}

export default LoginSignup
