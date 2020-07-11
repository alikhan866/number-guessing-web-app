import React, { Component } from 'react'
import Number from './Number/Number'
import { connect } from 'react-redux'

class Numbers extends Component {
    render() {
        const correctGuesses = this.props.correctGuesses
        let number
        if(correctGuesses === 0) {
            number = [<Number guess={`1-100`} key={Math.random} isActive={true}/>]
        } else if (correctGuesses > 0) {
            number = [<Number guess={`1-100`} key={Math.random} isActive={false}/>]
        }

        for(let i=0 ; i < correctGuesses ; i++) {
            if(i === correctGuesses-1)
                number.push(<Number guess={`1-${i+2}00`} key={i} isActive={true}/>)
            else
                number.push(<Number guess={`1-${i+2}00`} key={i} isActive={false}/>)
        }


        return (
            <React.Fragment>
                {number}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      correctGuesses: state.correctGuesses
    }
  }

export default connect(mapStateToProps)(Numbers)