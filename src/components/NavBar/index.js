// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, matchFound} = props
  return (
    <>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {matchFound ? (
        ''
      ) : (
        <div className="score-container">
          <p className="nav">Score: {score}</p>
          <p className="nav">Top Score: {topScore}</p>
        </div>
      )}
    </>
  )
}

export default NavBar
