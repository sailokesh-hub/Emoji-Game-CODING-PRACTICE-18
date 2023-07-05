// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachItem, sortAndCount} = props
  const {emojiName, emojiUrl, id} = eachItem

  const emojiClick = () => {
    sortAndCount(id)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={emojiClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
