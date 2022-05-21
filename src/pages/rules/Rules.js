import React from 'react'
import { useNavigate } from 'react-router-dom'
import './rulesPage.css'
export const Rules = () => {
  const navigate = useNavigate()
  return (
    <section className='rules-page-align-center'>
      <div className='rules-wrapper'>
        <h2 className='subheading text-lg'>rules plage</h2>
        <ul className='list-display-circle'>
          <li className='rules-content list-display-circle '>
            The quiz contain total 5 question
          </li>
          <li className='rules-content list-display-circle'>
            10 marks for every corect answer
            {/* and 5 negative mark for ever worng */}
            {/* answer{' '} */}
          </li>
          <li className='rules-content list-display-circle'>
            No skip option available{' '}
          </li>
        </ul>

        <div className='mb-10'>
          <button
            className='btn btn-success btn-full'
            onClick={() => navigate('/quiz')}
          >
            Play Now
          </button>
        </div>
      </div>
    </section>
  )
}
