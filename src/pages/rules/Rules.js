import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Rules = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>rules plage</h1>
      <button onClick={() => navigate('/quiz')}>play today</button>
    </div>
  )
}
