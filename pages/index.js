import React,{useContext} from "react";

import {Context} from '../context';

import  {useRouter} from 'next/router';

import axios from 'axios';

export default function Auth() {
  // https://api.chatengine.io/users/

    const {setUsername,username,secret,setSecret}=useContext(Context);
    const router=useRouter();
    // b984e024-d87e-40ab-b97b-6d429760d97d

    function onSubmit(e){
      e.preventDefault()

        if(setUsername.length === 0 || setSecret.length === 0) return

        axios.put(' https://api.chatengine.io/users/',
        {username,secret},
        {headers:{"Private-key":"b984e024-d87e-40ab-b97b-6d429760d97d"}}
        ).then(r=>router.push('/chats'))


    }


  return <div className="background">
    <div className="auth-container">
      <form  className="auth-form" onSubmit={(e)=>onSubmit(e)}>
<div className="auth-title">
  Stream Chat
</div>
<div className="input-container">
  <input
  placeholder="Email"
  className="text-input"
  onChange={e=>setUsername(e.target.value)}
  >
  
  </input>
</div>
<div className="input-container">
  <input
  type="password"
  placeholder="Password"
  className="text-input"
  onChange={e=>setSecret(e.target.value)}
  >
  
  </input>
</div>

  <button
  type="submit"
  className="submit-button"
  >Login/SignUp</button>
      </form>
    </div>
  </div>;
}
