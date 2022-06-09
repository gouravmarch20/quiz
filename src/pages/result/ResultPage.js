import React from 'react'
import './ResultPage.css'
import { useNavigate } from 'react-router-dom'
import './ResultPage.css'
import { useQuiz } from '../../context/QuizContext'
import { ResultCard } from '../../components'
export const ResultPage = () => {
  const {
    quizState: { selectedOption, quizQna }
  } = useQuiz()

  const navigate = useNavigate()
  // TODO : OPTIMAZIOTION ? NOT NEED --> .LENGTH CASE INCULUDE . TELL PICK QUIZ
  const isCorrectOption = quizQna?.map(qna =>
    qna.options.reduce((acc, curr, id) => {
      if (curr.correct) {
        acc = id
      }
      return acc
    }, 0)
  )
  const scoreCount = selectedOption.reduce(
    (acc, curr, index) =>
      // FIXME: BETTER MONEY PRAMID
      // curr === isCorrectOption[index] ? acc + 10 : acc - 5,
      curr === isCorrectOption[index] ? acc + 10 : acc,
    0
  )
  return (
    <>
      <div className='result-page-align-center'>
        <h2 className='heading'>
          Your score is <span className='color-fancy'>{scoreCount}</span>
        </h2>

        {quizQna.map((question, index) => {
          return (
            <div key={index}>
              <ResultCard
                question={question}
                selectedOption={selectedOption}
                questionIndex={index}
              />
            </div>
          )
        })}

        <button
          className='btn btn-info result-page-btn'
          onClick={() => navigate('/')}
        >
          Go to home
        </button>
      </div>
    </>
  )
}
