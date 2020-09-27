import React from 'react'
import { Link } from 'react-router-dom' 
import Title from '../components/Title'
import Description from '../components/Description'
import Form from '../components/Form'
import '../css/index.css'

export default function Home() {
  
  
  return(
    <div className='box'>
      <Title />
      <Description />
      <Form />
      <Link className='button' to='/list'>Presence List</Link>
    </div>

  )
}