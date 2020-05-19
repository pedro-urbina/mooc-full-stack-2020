import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const AnecdoteWithMostVotes = (props) => {
  return (
    <>
      <h1>Anecdote with the most votes</h1>
      {props.mostVotedAnecdote}<br />
      has {props.mostVotes} votes
    </>    
  )
}

const AnecdoteOfTheDay = (props) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[props.selected]}<br />
      has {props.votes[props.selected]} votes<br />
    </>
  )  
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(props.zeroVotes)
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(props.anecdotes[0])
  const [mostVotes, setMostVotes] = useState(0)

  const updateVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    if (newVotes[selected] > mostVotes) {
      setMostVotedAnecdote(props.anecdotes[selected])
      setMostVotes(newVotes[selected])
    }
  }

  return (
    <div>
      <AnecdoteOfTheDay anecdotes={props.anecdotes} selected={selected} votes={votes} />
      <Button handleClick={() => updateVotes()} text="vote" />
      <Button handleClick={() => setSelected(Math.floor((Math.random() * 6)))} text="next anecdote" />
      <AnecdoteWithMostVotes mostVotedAnecdote={mostVotedAnecdote} mostVotes={mostVotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const zeroVotes = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)

ReactDOM.render(
  <App anecdotes={anecdotes} zeroVotes={zeroVotes} />,
  document.getElementById('root')
)