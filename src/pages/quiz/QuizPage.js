import React from 'react'
import { Timer, Parimid, PlayQuiz } from '../../components/'
import './QuizPage.css'
export const QuizPage = () => {
  return (
    <>
      <div className='bg-container'>
        <main className=''>
          {/* <Timer /> */}
          <PlayQuiz />
          {/* <Parimid /> */}
        </main>
      </div>
    </>
  )
}
