import React from 'react'

export const ResultCard = ({ question, selectedOption, questionIndex }) => {
  console.log(question)
  return (
    <div>
      <p className='question'>{question.question}</p>

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
