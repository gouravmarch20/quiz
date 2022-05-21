import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { categories } from '../../faker/categories'
import { getQna, setCategory } from '../../actions/'
import { useQuiz } from '../../context/quizContext'
export const Home = () => {
  const navigate = useNavigate()
  const { quizState, quizDispatch } = useQuiz()
  const clickHandler = categoryId => {
    navigate('/rules')
    setCategory(quizDispatch, categoryId)
  }
  return (
    <div className='home'>
      {categories.map(category => {
        return (
          <section
            key={category._id}
            onClick={() => clickHandler(category._id)}
            className='more-quiz'
          >
            <h2 className='subheading'>{category.categoryName}</h2>
            <div className='cursor-pointer'>
              <img
                src={category.img.src}
                alt={category.img.altText}
                className='image--responsive'
              />
            </div>
            <p className='quiz-description'>{category.description}</p>
          </section>
        )
      })}
    </div>
  )
}
