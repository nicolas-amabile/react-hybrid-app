import React from 'react'
import WithTimer from 'core/hocs/timer'
import './App.css'

const App = (props) => {
  const { time, reset } = props
  return (
    <div className="App">
      <div> <h1> {time} </h1> </div>
      <div> <button onClick={reset} className="CancelButton"> Reset </button> </div>
    </div>
  )
}

export default WithTimer(App)
