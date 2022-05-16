import React from 'react'
import './ResultPage.css'
import { useNavigate } from 'react-router-dom'
import './ResultPage.css'
import { useQuiz } from '../../context/quizContext'
import { ResultCard } from '../../components'
export const ResultPage = () => {
  const {
    quizState: { selectedOption, quizQna },
    quizDispatch
  } = useQuiz()
  const navigate = useNavigate()
  const isCorrectOption = quizQna.map(qna =>
    qna.options.reduce((acc, curr, id) => {
      if (curr.correct) {
        acc = id
      }
      return acc
    }, 0)
  )
  const scoreCount = selectedOption.reduce(
    (acc, curr, index) =>
      curr === isCorrectOption[index] ? acc + 10 : acc - 5,
    0
  )
  return (
    <>
      <div className='align-center'>
        <h2 className='subheading'>Your score is {scoreCount}</h2>

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

        <button className='btn'>Go to home</button>
      </div>
    </>
  )
}
