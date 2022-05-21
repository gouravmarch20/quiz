import React from 'react'
import './resultCard.css'
export const ResultCard = ({ question, selectedOption, questionIndex }) => {
  return (
    <div className='result-card'>
      <p className='question  text-left m-10'>{question.question}</p>
      <div className=''>
        {question?.options.map((option, index) => {
          return (
            <button
              key={index}
              className={`btn cursor-none p-1 ${
                option.correct
                  ? 'btn-success'
                  : selectedOption[questionIndex] === index && !option.correct
                  ? 'btn-danger '
                  : ''
              }`}
            >
              {option.value}
            </button>
          )
        })}
      </div>
    </div>
  )
}
