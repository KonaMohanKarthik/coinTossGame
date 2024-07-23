// Write your code here
import {Component} from 'react'
import './index.css'

const heads_url = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tails_url = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResult: heads_url,
    headCount: 0,
    tailCount: 0,
  }

  onClickButton = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (toss === 0) {
      tossImage = heads_url
      latestHeadCount += 1
    } else {
      tossImage = tails_url
      latestTailCount += 1
    }

    this.setState({
      tossResult: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {tossResult, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="text-container">
            <h1 className="heading"> Coin Toss Game </h1>
            <p className="paragraph"> Heads (or) Tails </p>
            <img className="image" src={tossResult} alt="toss result" />

            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              Toss Coin
            </button>
            <div className="count-container">
              <p className="count"> Total: {totalCount} </p>
              <p className="count"> Heads: {headCount} </p>
              <p className="count"> Tails: {tailCount} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
