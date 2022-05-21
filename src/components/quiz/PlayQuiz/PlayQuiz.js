import React, { useEffect, useState } from 'react'
import './PlayQuiz.css'
import { useQuiz } from '../../../context/quizContext'
import {
  updateScore,
  updateQuestionIndex,
  addSelectedOption
} from '../../../actions'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'

export const PlayQuiz = () => {
  const {
    quizState: { currentQuestionIndex, quizQna },
    quizDispatch
  } = useQuiz()
  console.log(quizQna)
  // const currentQuestionIndex = 1

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setSelectedOptionIndex(-1)
  }, [currentQuestionIndex])
  useEffect(() => {
    if (location.pathname === '/quiz') {
      if (quizQna.length === 0) {
        console.log('object')
        navigate('/')
      }
    }
  }, [quizQna])

  const nextButtonHandler = () => {
    updateQuestionIndex(quizDispatch, currentQuestionIndex)
    addSelectedOption(selectedOptionIndex, quizDispatch)
    setSelectedOptionIndex(-1)
  }

  const submitBtnHandler = () => {
    addSelectedOption(selectedOptionIndex, quizDispatch)
    setSelectedOptionIndex(-1)
    navigate('/result')
  }
  const optionBtnHandler = optionId => {
    setSelectedOptionIndex(optionId)
  }
  return (
    <div className='question-options'>
      <div className='question'>{quizQna[currentQuestionIndex]?.question}</div>
      <div className=''>
        {quizQna[currentQuestionIndex]?.options.map((option, index) => {
          return (
            <div
              key={index}
              onClick={() => optionBtnHandler(index)}
              className='options'
            >
              <div
                className={`option ${
                  selectedOptionIndex === index ? 'option-selected' : ''
                } `}
              >
                {option.value}
              </div>
            </div>
          )
        })}
      </div>

      <>
        {quizQna.length - 1 === currentQuestionIndex ? (
          <>
            <button
              className={`btn ${
                selectedOptionIndex === -1 ? 'btn-disable' : ''
              }`}
              onClick={submitBtnHandler}
            >
              Get Score{' '}
            </button>
            <h2 className=' subheading text-green '>It your last question</h2>
          </>
        ) : (
          <>
            <button
              className={`btn ${
                selectedOptionIndex === -1 ? 'btn-disable' : ''
              }`}
              onClick={nextButtonHandler}
            >
              Next question{' '}
            </button>
            <h2 className='subheading'>
              Current question number{' '}
              <span className='text-green text-lg'>
                {' '}
                {currentQuestionIndex + 1}
              </span>
            </h2>
          </>
        )}
      </>
    </div>
  )
}
