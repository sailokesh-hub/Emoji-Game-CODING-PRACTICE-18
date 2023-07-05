// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  let heading
  let para
  let src
  let alt
  if (score < 12) {
    heading = 'You Lose'
    para = 'Score'
    src = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    alt = 'lose'
  } else if (score === 12) {
    heading = 'You Won'
    para = 'Best Score'
    src = 'https://assets.ccbp.in/frontend/react-js/win-game-img.png'
    alt = 'win'
  }

  const restart = () => {
    playAgain()
  }

  return (
    <div className="list-container">
      <div className="score-card">
        <h1 className="heading">{heading}</h1>
        <div>
          <p className="para">{para}</p>
          <p className="score">{score}/12</p>
          <button onClick={restart} type="button" className="play-again-button">
            Play Again
          </button>
        </div>
      </div>
      <img src={src} alt={alt} className="img" />
    </div>
  )
}

export default WinOrLoseCard
