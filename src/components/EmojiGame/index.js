/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    emojiList: [],
    score: 0,
    topScore: 0,
    emojiArray: [],
    matchFound: false,
  }

  componentDidMount() {
    this.changeStates()
  }

  changeStates = () => {
    const {emojisList} = this.props
    this.setState({emojiList: emojisList})
  }

  emojiCount = id => {
    const {emojiArray} = this.state
    const result = emojiArray.includes(id)
    if (result === false) {
      const newEmojiCount = [...emojiArray, id]
      this.setState({emojiArray: newEmojiCount})
      return true
    }
    if (result === true) {
      this.setState(prevState => ({
        matchFound: !prevState.matchFound,
      }))
      return false
    }
    return false
  }

  sortAndCount = id => {
    const {emojiList} = this.state
    const filteredList = emojiList.sort(() => Math.random() - 0.5)
    this.setState({emojiList: filteredList})

    const result = this.emojiCount(id)
    if (result === true) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }
    if (result === false) {
      const {score} = this.state
      this.setState(prevState => ({
        topScore: Math.max(prevState.topScore, score),
        score: 0,
        emojiArray: [],
      }))
    }
  }

  playAgain = () => {
    this.setState({matchFound: false})
  }

  reRender = () => {
    this.setState({matchFound: true})
  }

  render() {
    const {emojiList, score, topScore, matchFound} = this.state

    if (topScore === 12) {
      this.reRender()
    }
    console.log(matchFound)

    const homePage = (
      <>
        {emojiList.map(eachItem => (
          <EmojiCard
            eachItem={eachItem}
            sortAndCount={this.sortAndCount}
            key={eachItem.id}
          />
        ))}
      </>
    )

    const WinOrLose = (
      <WinOrLoseCard playAgain={this.playAgain} score={topScore} />
    )

    return (
      <div className="emoji-game-container">
        <nav className="navbar">
          <NavBar score={score} matchFound={matchFound} topScore={topScore} />
        </nav>
        <div className="emoji-list-container">
          <ul className="list">{matchFound ? WinOrLose : homePage}</ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
