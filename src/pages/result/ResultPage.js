import React from 'react'
import './ResultPage.css'
import { useNavigate } from 'react-router-dom'

import { useQuiz } from '../../context/quizContext'
import { ResultCard } from '../../components'
export const ResultPage = () => {
  const {
    quizState: { selectedOption, quizQna },
    quizDispatch
  } = useQuiz()
  const navigate = useNavigate()
  console.log(quizQna)
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
      <div className=''>
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
      </div>
    </>
  )
}
