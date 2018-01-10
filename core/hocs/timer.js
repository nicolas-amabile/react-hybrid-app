import React, { Component } from 'react'

export default function WithTimer (WrappedComponent) {
  return class TimerWrapper extends Component {
    constructor (props) {
      super(props)
      this.setInitialState()
      this.tick = this.tick.bind(this)
    }

    setInitialState () {
      this.state = { secondsRemaining: 0 }
    }

    render () {
      return (
        <WrappedComponent
          time={this.getFormattedTime(this.state.secondsRemaining)}
          reset={this.reset.bind(this)} />
      )
    }

    componentDidMount () {
      this.interval = setInterval(this.tick, 1000)
    }

    reset () {
      this.setState({ secondsRemaining: 0 })
    }

    tick () {
      this.setState({
        secondsRemaining: this.state.secondsRemaining + 1
      })
    }

    componentWillUnmount () {
      clearInterval(this.interval)
    }

    getFormattedTime (totalSeconds) {
      var days = Math.floor(totalSeconds / 86400)
      totalSeconds -= days * 86400

      // calculate (and subtract) whole hours
      var hours = Math.floor(totalSeconds / 3600) % 24
      totalSeconds -= hours * 3600

      // calculate (and subtract) whole minutes
      var minutes = Math.floor(totalSeconds / 60) % 60
      totalSeconds -= minutes * 60

      // what's left is seconds
      var seconds = Math.floor(totalSeconds % 60)

      seconds = seconds < 10 ? '0' + seconds : seconds
      minutes = minutes < 10 ? '0' + minutes : minutes
      hours = hours < 10 ? '0' + hours : hours

      return days.toString() + ' days, ' + hours.toString() + ':' + minutes.toString() + ':' + seconds.toString()
    }
  }
}
