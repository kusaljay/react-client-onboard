import React, { useState } from 'react'
import FormInput from './FormInput'

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
    const tokenEP = process.env.REACT_APP_TOKEN_EP
    const clientID = process.env.REACT_APP_CLIENT_ID

    const getToken = async () => {
      const response = await fetch(tokenEP, {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: `grant_type=password&username=${state.username}&password=${state.password}&client_id=${clientID}`
      })

      if (response.status === 200) {
        const data = await response.json()
        // return data
        console.log(data)
      } else {
        throw new Error(`${response.status} | Unable to fetch token`)
      }
    }
    getToken()
    e.preventDefault()
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
