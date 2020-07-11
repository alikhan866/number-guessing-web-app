import React, { Component } from 'react'
import Response from '../../Response/Response'
import './Number.css'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions'
class Number extends Component {

    state = {
        generatedNumber: '',
        inputValue: '',
        responseColor: ''
    }
    componentDidMount(){
        this.generateRandomNumberHandler()
    }
    generateRandomNumberHandler = () => {
        const randomNumber = parseInt(Math.random() * 100 *(this.props.correctGuesses + 1 ))
        this.setState({ generatedNumber: randomNumber })
    }

    inputChangedHandler = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    guessHandler = (guessNumber, randomNumber) => {
        const difference = Math.abs(guessNumber - randomNumber)
        console.log('Random Number'+randomNumber)
        if (difference === 0) {
            //correct
            this.setState({ responseColor: 'Correct' })
            this.props.onCorrectGuess()
        }
        if (difference <= 4 && difference !== 0) {
            //hot
            this.setState({ responseColor: 'Hot' })
        }
        if (difference <= 15 && difference > 4) {
            //warm
            this.setState({ responseColor: 'Warm' })
        }
        if(difference > 15) {
            //cold
            this.setState({ responseColor: 'Cold' })
        }
    }

    render() {
        return (
            <div className='Div'>
                <h2>Guess between {this.props.guess}</h2>
                <input
                    className='Input'
                    type='number'
                    placeholder='Enter your guess'
                    value={this.state.inputValue}
                    onChange={(event) => this.inputChangedHandler(event)}
                />
                <button
                     disabled={this.props.isActive ? false : true}
                    className='Button'
                    onClick={() => this.guessHandler(this.state.inputValue, this.state.generatedNumber)}
                >GUESS!</button>
                <Response
                responseColor={this.state.responseColor}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCorrectGuess: () => dispatch({
            type:actionTypes.COUNT_OF_CORRECT_GUESSES
        })
    }
}

const mapStateToProps = state => {
    return {
      correctGuesses: state.correctGuesses
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Number)