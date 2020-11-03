import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) =>(
    <button onClick={handleClick}>{text}</button>
)

const Display = (props) =>{
    console.log("hjk", props)
    return(
        <div>{props.selected}<br />has {props.votes} votes</div>
    )
}

const App = () => {
    const [selected, setSelected] = useState(0)
    const handleClick = () =>{
        let a = Math.floor(Math.random() * anecdotes.length)
        setSelected(a)
    }
    const click = () =>{
        const copy = [...votes]
        let index = copy.indexOf(selected)
    }

    return (
        <div>
            <Display selected={anecdotes[selected]} votes={votes[selected]}/>
            <Button handleClick={click} text={'vote'} />
            <Button handleClick={handleClick} text={'next anecdote'} />
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

const votes = [0, 0, 0, 0, 0, 0]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)