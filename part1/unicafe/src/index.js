import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  let good = props.good
  let neutral = props.neutral
  let bad = props.bad

  let all = good + bad + neutral
  let average = all > 0 ? (good - bad) / all : "-"
  let positive = all > 0 ? (good / all) : "-"

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } 

  return (
    <div>    
        good {good}<br />
        neutral {neutral}<br />
        bad {bad}<br />
        all {all}<br />
        average {average}<br />
        positive {positive} %
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + bad + neutral
  let average = all > 0 ? (good - bad) / all : "-"
  let positive = all > 0 ? (good / all) : "-"

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)