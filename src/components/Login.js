import React, { useState } from 'react'
import FormInput from './lib/FormInput'
import { getToken } from '../api/api'

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setState(prevState => ({...prevState, [name] : value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const tokenEP = process.env.REACT_APP_TOKEN_EP
    const clientID = process.env.REACT_APP_CLIENT_ID
    const username = state.username
    const password = state.password

    getToken(tokenEP, username, password, clientID)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          name="username"
          value={state.username}
          onChange={handleInputChange}
          placeholder="Enter Username"
          className="input" />
        <FormInput
          type="password"
          label="Password"
          name="password"
          value={state.password}
          onChange={handleInputChange}
          placeholder="Enter password"
          className="input" />
        <button>Get token</button>
      </form>
      
    </div>
  )
}

export default Login
