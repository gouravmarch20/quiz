import React from 'react'
import { leaderboard } from '../../faker/leaderboard'
import './leaderboard.css'
export const LeaderboardPage = () => {
  return (
    <>
      <section className=''>
        <ul className='notification'>
          {leaderboard.map(leader => {
            return (
              <li className='list-item'>
                <figure>
                  <img className='avatar avatar-lg' src={leader.imageUrl} />
                  <span className='subheading text-xmd'>
                    Score : {leader.score}
                  </span>
                </figure>
                <p className='content text-xmd'>
                  Quiz name : <span>{leader.quizName}</span>
                </p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
