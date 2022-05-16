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
    quizState: { currentQuestionIndex, quizQna,   },
    quizDispatch
  } = useQuiz()

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setSelectedOptionIndex(-1)
  }, [currentQuestionIndex])
  useEffect(() => {
    //TODO:
    if (location.pathname === '/quiz') {
      // dispatch({ type: RESET_QUIZ })
    }
  }, [])

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
      <div className='question'>{quizQna[currentQuestionIndex].question}</div>

      {quizQna[currentQuestionIndex].options.map((option, index) => {
        return (
          <div key={index} onClick={() => optionBtnHandler(index)}>
            <p>{option.value}</p>
          </div>
        )
      })}

      <>
        {quizQna.length - 1 === currentQuestionIndex ? (
          <button
            className={`btn ${selectedOptionIndex === -1 ? 'btn-disable' : ''}`}
            onClick={submitBtnHandler}
          >
            Get Score{' '}
          </button>
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
          </>
        )}
      </>
    </div>
  )
}
