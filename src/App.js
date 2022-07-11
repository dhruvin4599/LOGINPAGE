import React, { useState } from 'react'

export const App = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const submitForm =()=>{}

    
  
  return ( 
    <><><form action="" onSubmit={submitForm}>

      </form><div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" autoComplete="off" value={email}>
                onChange={(e)=> setEmail(e.target.value)}
              </input>
          </div></><div>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password" autoComplete="off" value={password}>
              onChange={(e)=> setPassword(e.target.value)}
              </input>
              <button type = "submit">Login</button>
          </div>
          </>
  )
}

export default App;