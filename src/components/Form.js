import React, { useState } from 'react';

export default function Form(){
  const [email, setEmail] = useState()

  function handleSubmit(event){
    event.preventDefault()
    sendData();
    setEmail('');
  }

  async function sendData(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    };
    await fetch('/api/register', requestOptions)
        .then(response => response.json())
  }

  function handleEmailChange(event){
    setEmail(event.target.value)
  }

  return(
    <form onSubmit={handleSubmit} className='fieldBox'>
      <label>A label</label>
      <input className='inputFields' type='email'
        placeholder='add your email here'
        value={email || ''}
        onChange={handleEmailChange}
      />
      <button>Send</button>
    </form>
  );
}