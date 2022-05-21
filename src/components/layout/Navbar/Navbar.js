import React from 'react'
import './Navbar.css'
import { NavLink, Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className='navbar-wrapper'>
        <div className='navbar-fluid'>
          <div className='navbar-left'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'nav-link-active navbar-link ' : 'navbar-link '
              }
            >
              Quiz *
            </NavLink>
          </div>
          <div className='navbar-center'>
            <input type='search' className='input-quiz-search' name='' id='' />
            <button className='input-seach-btn '>search</button>
          </div>
          <div className='navbar-right'>
            <NavLink
              to='./leaderboard'
              className={({ isActive }) =>
                isActive ? 'nav-link-active navbar-link ' : 'navbar-link '
              }
            >
              leaderboard{' '}
            </NavLink>

            <NavLink
              to='./rules'
              className={({ isActive }) =>
                isActive ? 'nav-link-active navbar-link ' : 'navbar-link '
              }
            >
              rules
            </NavLink>
            {/* <NavLink
              to='./rules'
              className={({ isActive }) =>
                isActive ? 'nav-link-active navbar-link ' : 'navbar-link '
              }
            >
              Share
            </NavLink> */}
          </div>
        </div>
      </nav>
    </>
  )
}
