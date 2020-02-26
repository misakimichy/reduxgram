// Reducer takes two things
// 1. the action - the info about what happened
// 2. copy of current state

const posts = ( state = [], action) => {
    let newState = [...state]
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            newState[action.index].likes++
            return newState
        default:
            return state
    }
}

export default posts