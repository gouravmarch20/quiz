import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate()

  const clickHandler = categoryId => {
    navigate('/rules')
    sessionStorage.setItem('currQuiz', categoryId)
  }
  return (
    <div className='home'>
      <div className='card-layout'>
        <div className='card card-vertical card-shadow-dark pointer'>
          <div className='img-container'>
            <img
              src='/assets/ffa.jpg'
              alt='flowersforalgernon book'
              className='img-responsive'
            />
          </div>

          <div className='card-content padding-s'>
            <h2 className='card-title'>Books</h2>

            <span>
              Asimov, Herbert , Wells and Ursala are all familiar names
            </span>
            <div className='card-footer'>
              <button
                className='btn btn-primary-solid flex-center gap-xs'
                // onClick={() => clickHandler("1")}
              >
                <span>Take the Quiz</span>
                <i className='fa-fw fas fa-book'></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='card-layout'>
        <div className='card card-vertical card-shadow-dark pointer'>
          <div className='img-container'>
            <img
              src='/assets/interstellar.jpg'
              alt='interstellar movie'
              className='img-responsive'
            />
          </div>

          <div className='card-content padding-s'>
            <h2 className='card-title'>Movies</h2>

            <span>Red Pill or Blue Pill? Dream or reality?</span>
            <div className='card-footer'>
              <button
                className='btn btn-primary-solid flex-center gap-xs'
                // onClick={() => clickHandler("2")}
              >
                <span>Take the Quiz</span>
                <i className='fa-fw fas fa-video'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='card-layout'>
        <div className='card card-vertical card-shadow-dark pointer'>
          <div className='img-container'>
            <img
              src='/assets/darkseries.jpg'
              alt='dark series'
              className='img-responsive'
            />
          </div>

          <div className='card-content padding-s'>
            <h2 className='card-title'>TV series</h2>

            <span>Have you watched enough? Let's find out</span>
            <div className='card-footer'>
              <button
                className='btn btn-primary-solid flex-center gap-xs'
                // onClick={() => clickHandler("3")}
              >
                <span>Take the Quiz</span>
                <i className='fa-fw fas fa-tv'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
