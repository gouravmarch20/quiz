import {
  GET_QNA,
  SET_CATEGORY,
  UPDATE_SCORE,
  UPDATE_QUESTION,
  SET_SELECTED_OPTION
} from '../types/'

export const quizReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_QNA:
      return { ...state, quizQna: payload }
    case SET_CATEGORY:
      return { ...state, quizQna: payload }
    case UPDATE_SCORE:
      return { ...state, score: payload }
    case UPDATE_QUESTION:
      return { ...state, currentQuestionIndex: payload }
    case SET_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: [...state.selectedOption, payload]
      }

    default:
      return state
  }
}
