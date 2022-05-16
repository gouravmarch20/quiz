import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../../faker/categories'
import { getQna, setCategory } from '../../actions/'
import { useQuiz } from '../../context/quizContext'
export const Home = () => {
  const navigate = useNavigate()
  const { quizState, quizDispatch } = useQuiz()
  const clickHandler = categoryId => {
    navigate('/rules')
    // setCategory(quizDispatch, categoryId)
  }
  return (
    <div className='home'>
      {/* {categories && categories.length > 0 ? (
        <div>
          <div className='card'>
            <h2>h</h2> */}
      {categories.map(category => {
        return (
          <div key={category._id} onClick={() => clickHandler(category._id)}>
            <p>{category.categoryName}</p>
            <p>{category.description}</p>
            <img src={category.img.src} alt={category.img.altText} />
          </div>
        )
      })}
      {/* </div>
        </div>
      ) : (
        <div>
          <h2>No quiz available</h2>
        </div>
      )} */}
    </div>
  )
}
