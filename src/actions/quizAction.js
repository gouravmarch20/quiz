import { qnaData } from '../faker/qna'
import {
  GET_QNA,
  SET_CATEGORY,
  UPDATE_SCORE,
  UPDATE_QUESTION,
  SET_SELECTED_OPTION
} from '../types/'
export const getQna = async (categoryId, quizDispatch) => {
  // try {
  //   if (categoryId) {
  //     const { questions } = qnaData.find(
  //       question => question.categoryId === categoryId
  //     )
  //     quizDispatch({ type: GET_QNA, payload: questions })
  //   }
  // } catch (error) {
  //   console.warn(error)
  // }
}
export const setCategory = async (quizDispatch, categoryId) => {
  const { quizQna } = qnaData.find(qna => qna.categoryId === categoryId)

  try {
    quizDispatch({ type: SET_CATEGORY, payload: quizQna })
  } catch (error) {
    console.warn(error)
  }
}
export const updateScore = async (quizDispatch, score) => {
  try {
    quizDispatch({ type: UPDATE_SCORE, payload: ++score })
  } catch (error) {
    console.warn(error)
  }
}
export const updateQuestionIndex = async (quizDispatch, score) => {
  try {
    quizDispatch({ type: UPDATE_QUESTION, payload: ++score })
  } catch (error) {
    console.warn(error)
  }
}
export const addSelectedOption = async (selectedOption, quizDispatch) => {
  try {
    quizDispatch({ type: SET_SELECTED_OPTION, payload: selectedOption })
  } catch (error) {
    console.warn(error)
  }
}
