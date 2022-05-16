import React from 'react'

export const ResultCard = ({ question, selectedOption, questionIndex }) => {
  return (
    <div>
    
      <p className='question margin-1'>{question.question}</p>

      {question?.options.map((option, index) => {
        return (
          <button
            key={index}
            className={`btn ${
              option.correct
                ? 'bg-green'
                : selectedOption[questionIndex] === index && !option.correct
                ? 'btn-danger'
                : ''
            }`}
          >
            {option.value}
          </button>
        )
      })}
    </div>
  )
}
