import React from 'react'
import { useNavigate } from 'react-router-dom'
import './rulesPage.css'
export const Rules = () => {
  const navigate = useNavigate()
  return (
    <section className='rules-page'>
      {/* <div className='rules-wrapper'> */}
      <h2 className='subheading'>rules plage</h2>

      <p className='content'>The quiz contain total 5 question</p>
      <p className='content'>
        10 marks for every corect answer and 5 negative mark for ever worng
        answer{' '}
      </p>
      <p className='content'>no skip option available </p>
      <button onClick={() => navigate('/quiz')}>play today</button>
      {/* </div> */}
    </section>
  )
}
