import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { Home, Rules, QuizPage, ResultPage, LeaderboardPage } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path='/leaderboard' element={<LeaderboardPage />} />
      </Routes>
    </div>
  )
}

export default App
