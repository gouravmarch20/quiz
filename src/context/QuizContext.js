import { createContext, useContext, useReducer, useEffect } from 'react'
import { quizReducer } from '../reducers'

import { setCategory, getQna } from '../actions'
const initialState = {
  categoryId: '',
  quizQna: [],
  currentQuestionIndex: 0,
  score: 0,
  selectedOption: []
}
const QuizContext = createContext(initialState)

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState)
  useEffect(() => {
    getQna(quizState.categoryId, quizDispatch)
  }, [quizState.categoryId])

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  )
}
const useQuiz = () => useContext(QuizContext)
export { QuizProvider, useQuiz }
