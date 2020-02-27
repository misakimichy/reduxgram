// Reducer takes two things
// 1. the action - the info about what happened
// 2. copy of current state

const posts = ( state = [], action) => {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            let newState = [...state]
            newState[action.index].likes++
            return newState
        default:
            return state
    }
}

export default posts