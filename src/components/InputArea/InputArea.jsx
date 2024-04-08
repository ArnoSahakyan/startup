import { useState } from 'react'
import './InputArea.scss'
export default function InputArea() {
  const [selected, setSelected] = useState(
    'Sign Up'
  )


  return (
    <div className="InputAreaBG">
      <div className="InputArea container">
        <div className="InputArea__content">
          <h2>We solve digital problems with an outstanding creative flare</h2>
          <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        </div>
        <div className="InputArea__form">
          
            <div className="InputArea__login">
              <p className={selected === 'Sign Up' ? 'active' : ''} onClick={() => setSelected('Sign Up')}>Sign Up</p>
              <p className={selected === 'Login' ? 'active' : ''} onClick={() => setSelected('Login')}>Log In</p>
            </div>
            {
              selected === 'Sign Up'
                ?
                <form>
                  <input type="email" placeholder='Your Email' />
                  <input type="password" placeholder='Your Password' />
                  <button className='btn-2'>Create an Account</button>
                  <span>or</span>
                  <button className='btn-1'>Login via Twitter</button>
                </form>
                :
                <form>
                  <input type="email" placeholder='Your Email' />
                  <input type="password" placeholder='Your Password' />
                  <button className='btn-2'>Log In To Account</button>
                </form>
            }
          
        </div>

      </div>
      <h1></h1>

    </div>
  )
}
