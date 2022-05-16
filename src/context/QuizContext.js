import { createContext, useContext, useReducer, useEffect } from 'react'
import { quizReducer } from '../reducers'

import { setCategory, getQna } from '../actions'
const initialState = {
  categoryId: '',
  quizQna: [
    {
      options: [
        {
          correct: false,
          value: 'Aman Gupta'
        },
        {
          value: 'Anupam Mittal',
          correct: false
        },
        {
          value: 'Peyush Bansal',
          correct: true
        },
        {
          correct: false,
          value: 'Namita Thapar'
        }
      ],
      question: 'Which shark founded the company called Lenskart?'
    },
    {
      options: [
        {
          correct: false,
          value: 24
        },
        {
          value: 35,
          correct: true
        },
        {
          value: 32,
          correct: false
        },
        {
          value: 28,
          correct: false
        }
      ],
      question: 'How many episodes are there in the first season? '
    },
    {
      options: [
        {
          value: 'Ashneer Grover',
          correct: true
        },
        {
          value: 'Aman Gupta',
          correct: false
        },
        {
          correct: false,
          value: 'Munna Bhai'
        },
        {
          value: 'Anupam Mittal',
          correct: false
        }
      ],
      question: 'Who said the dialogue - "Ye sab doglapan hai"?'
    },
    {
      options: [
        {
          correct: false,
          value: 'Aman Gupta'
        },
        {
          correct: false,
          value: 'Namita Thapar'
        },
        {
          correct: true,
          value: 'Anupam Mittal'
        },
        {
          value: 'Peyush Bansal',
          correct: false
        }
      ],
      question: 'Who is the first investor of Ola?'
    },
    {
      question: 'Who is the founder of Sugar Cosmetics?',
      options: [
        {
          correct: true,
          value: 'Vineeta Singh'
        },
        {
          value: 'Ghazal Alagh',
          correct: false
        },
        {
          correct: false,
          value: 'Namita Thapar'
        },
        {
          value: 'Neetu Singh',
          correct: false
        }
      ]
    }
  ],
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
