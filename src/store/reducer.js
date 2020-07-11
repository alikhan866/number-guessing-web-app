import * as actionTypes from './actions'

const initialState = {
    correctGuesses: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.COUNT_OF_CORRECT_GUESSES:
            return {
                ...state,
                correctGuesses: state.correctGuesses + 1
            }
        default:
            return state
    }

}

export default reducer