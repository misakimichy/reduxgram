const comments = ( state = [], action) => {
    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state
}

const postComments = ( state = [], action) => {
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
        let newState = [...state]
        console.log('REMOVE state', state)
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
        default :
            return state
    }
}

export default comments