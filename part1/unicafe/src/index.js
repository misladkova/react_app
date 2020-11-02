import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = (props) =>{
    console.log(props)
    const {handleClick, text} = props
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

const Statistics = (props) =>{
    return(
        <p>good {props.good}<br />neutral {props.neutral}<br />bad {props.bad}<br />all {props.all}<br />
        average {props.average}<br />positive {props.positive}%</p>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good+bad+neutral

    let average = 0
    if(all!==0) {
        average = (good - bad) / all
    }
    let positive = 0
    if(all!==0){
        positive = (good/all)*100
    }

    return(
        <div>
            <h1>give feedback</h1>
            <Button handleClick={()=>setGood(good+1)} text={'good'}/>
            <Button handleClick={()=>setNeutral(neutral+1)} text={'neutral'}/>
            <Button handleClick={()=>setBad(bad+1)} text={'bad'}/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)

