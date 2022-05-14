import React from 'react'
import './Navbar.css'
import { NavLink, Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className='navbar-warpper'>
        <div className='nav__left'>
          <div>
            <NavLink to='./home'>Home</NavLink>
          </div>
          <div>
            <NavLink to='./signin'>
              <button className='nav__btn'>Login</button>
            </NavLink>
          </div>
        </div>
        <div className='nav__right'>
          <div>
            <NavLink to='./leaderboard'>leaderBoard </NavLink>
          </div>
          <div>
            <NavLink to='./more'> moreQuiz </NavLink>
          </div>
          <div>
            <NavLink to='./rules'>rules</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}
