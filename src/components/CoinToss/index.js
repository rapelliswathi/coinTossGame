// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  render() {
    const {total, heads, tails} = this.state

    return (
      <div className="app-container">
        <div className="total-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="coin">Heads (or) Tails</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
            className="image"
          />
          <button
            type="button"
            className="toss-button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="coin-container">
            <p className="total">Total:{total}</p>
            <p className="heads">Heads:{heads}</p>
            <p className="tails">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
